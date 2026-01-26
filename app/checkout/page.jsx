"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function go() {
    setErr("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Checkout error");

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
      if (error) throw new Error(error.message);
    } catch (e) {
      setErr(e.message || "Error");
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Checkout</h1>
      <p>Pay securely with Stripe.</p>

      <button
        onClick={go}
        disabled={loading}
        style={{ padding: "10px 14px", border: "1px solid #000" }}
      >
        {loading ? "Redirecting..." : "Pay now"}
      </button>

      {err ? <p style={{ marginTop: 12 }}>Error: {err}</p> : null}
    </main>
  );
}
