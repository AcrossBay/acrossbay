"use client";

import Link from "next/link";

export default function ContactEN() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px", fontFamily: "system-ui" }}>
      <h1 style={{ marginTop: 0 }}>Contact</h1>
      <p style={{ color: "#444" }}>Contact page is live (no more 404).</p>

      <Link
        href="/en"
        style={{
          border: "1px solid #ddd",
          color: "#111",
          padding: "10px 14px",
          borderRadius: 10,
          textDecoration: "none",
          fontWeight: 700,
          display: "inline-block",
          marginTop: 12,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
