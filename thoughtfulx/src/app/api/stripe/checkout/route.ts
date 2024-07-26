import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const priceId = process.env.LIFELONG_LEARNER_STRIPE_PRODUCT;

if (!stripeSecretKey) {
    throw new Error('Stripe secret key is not set in environment variables');
}

const stripe = new Stripe(stripeSecretKey);

export async function POST(request: Request) {
    const origin = request.headers.get('origin');
    if (!origin) {
        return new Response(JSON.stringify({ error: 'Origin header is missing' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    try {
        const params = await request.json();
        const userId = params.userId;

        if (!userId) {
            return new Response(JSON.stringify({ error: 'User ID is missing from request body' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: priceId,
                quantity: 1,
            }],
            mode: 'payment',
            metadata: { userId: userId },
            success_url:  `${origin}/settings`,
            cancel_url: `${origin}/settings`,
        });

        return new Response(JSON.stringify({ sessionId: session.id }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Failed to create Stripe session:', error);
        return new Response(JSON.stringify({ error: 'Failed to create payment session' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
