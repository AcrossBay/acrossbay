export default function Page() {
  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/bJe3cxd9M8VIdaa9o2kw00";

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <header style={{ borderBottom: "1px solid #eee" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontWeight: 800 }}>AcrossBay</div>

          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/en" style={{ textDecoration: "none", color: "#111" }}>Home</a>
            <a href="/en/selection" style={{ textDecoration: "none", color: "#111" }}>Selection</a>
            <a href="/en/about" style={{ textDecoration: "none", color: "#111" }}>About</a>
            <a href="/en/contact" style={{ textDecoration: "none", color: "#111" }}>Contact</a>
            <a href="/en/privacy" style={{ textDecoration: "none", color: "#111" }}>Privacy</a>
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#111", fontWeight: 700 }}
            >
              Payment
            </a>
          </nav>

          <div style={{ display: "flex", gap: 8 }}>
            <a
              href="/"
              style={{
                border: "1px solid #ccc",
                padding: "6px 10px",
                borderRadius: 8,
                textDecoration: "none",
                color: "#111",
                fontWeight: 800,
              }}
            >
              IT
            </a>
            <a
              href="/en"
              style={{
                border: "1px solid #111",
                padding: "6px 10px",
                borderRadius: 8,
                textDecoration: "none",
                color: "#111",
                fontWeight: 800,
              }}
            >
              EN
            </a>
          </div>
        </div>
      </header>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px 24px" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: 0 }}>
          Products that require understanding, not impulse buying.
        </h1>
        <p style={{ marginTop: 14, color: "#444", maxWidth: 760 }}>
          AcrossBay curates high-quality items for wellness and everyday life.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
          <a
            href="/en/selection"
            style={{
              background: "#111",
              color: "white",
              padding: "10px 16px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Explore selection
          </a>

          <a
            href={STRIPE_PAYMENT_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #ddd",
              color: "#111",
              padding: "10px 16px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Go to payment
          </a>
        </div>
      </section>
    </main>
  );
}
