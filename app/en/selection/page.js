"use client";

import Link from "next/link";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/bJe3cxd9M8VIdaa9o2kw00";

export default function SelectionEN() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px", fontFamily: "system-ui" }}>
      <h1 style={{ marginTop: 0 }}>Selection</h1>
      <p style={{ color: "#444" }}>
        Selection page is live (no more 404). Products will be added here.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
        <a
          href={STRIPE_PAYMENT_LINK}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#111",
            color: "white",
            padding: "10px 14px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Go to payment
        </a>

        <Link
          href="/en"
          style={{
            border: "1px solid #ddd",
            color: "#111",
            padding: "10px 14px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
