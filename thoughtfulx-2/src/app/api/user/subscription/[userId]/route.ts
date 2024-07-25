import { createClient } from "@/utils/supabase/auth/server";

export async function GET(request: Request, { params }: { params: { userId: string } }) {
    const supabase = createClient();
    const userId = params.userId;

    const { data, error } = await supabase
        .from('user_subscriptions')
        .select("*")
        .eq("user_id", userId);

    if (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    let isPremium = false;

    if (!data || data.length === 0) {
        isPremium = false;
    } else {
        // iterate over data and if any of the subscription is active, set isPremium to true
        for (let i = 0; i < data.length; i++) {
            if (data[i].is_premium === true) {
                isPremium = true;
                break;
            }
        }
    }

    return new Response(JSON.stringify({isPremium}), { status: 200 });
}
