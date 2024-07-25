import { error } from "next/dist/build/output/log"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@/utils/supabase/auth/server"
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const createUserSubscription = async (userId: string) => {
    const supabase = createClient()

    const record = {
        user_id: userId,
        is_premium: true,
        subscription_id: "EARLY_SUPPORTER",
    };

    // Perform an upsert operation
    const { data, error } = await supabase
        .from("user_subscriptions")
        .upsert(record, { onConflict: "user_id, subscription_id" });

    if (error) {
        console.error("Error in upserting user subscription:", error);
        return { error };
    }

    
    return { data };
}

export const POST = async (req: NextRequest, res: NextResponse) => {

    const body = await req.text()
    const sig = req.headers.get("stripe-signature")
    
    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(body, sig as string, STRIPE_WEBHOOK_SECRET)

        
    } catch (err) {
        error(err as string)
        return new Response(`Webhook Error: ${(err as Error).message}`, {
            status: 400,
        })
    }

    try {
        let session;
        // Handle the event
        switch (event.type) {

            // case "payment_intent.created":
            //     session = event.data.object as Stripe.Checkout.Session
            // 	
            // 	await createUserSubscription(session)
            // 	break
            case "checkout.session.completed":
                session = event.data.object as Stripe.Checkout.Session
                
                if (!session.metadata) {
                    
                    return new Response("No user id provided", { status: 400 })
                } 
                const userId = "f6688ab7-9124-41db-9ae5-e692fbed2fd1";
                if (!userId) {
                    
                    return new Response("No user id provided", { status: 400 })
                }
                
                const subscriptionCreationResult = await createUserSubscription(userId)
                
                break
            case "checkout.session.async_payment_failed":
                session = event.data.object as Stripe.Checkout.Session

                // don't do anything but return an error to customer
                

                break
            default:
                // Unexpected event type
                break
        }
    } catch (err) {
        return new Response("Webhook handler failed. View logs.", {
            status: 400,
        })
    }


    return NextResponse.json({ success: true })
}