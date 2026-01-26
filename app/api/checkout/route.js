import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export async function POST() {
  try {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://across-bay.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/?success=1`,
      cancel_url: `${siteUrl}/?canceled=1`,
    });

    return Response.json({ id: session.id });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e?.message || "Stripe error" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}
