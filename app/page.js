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
            <a href="/" style={{ textDecoration: "none", color: "#111" }}>Home</a>
            <a href="/selezione" style={{ textDecoration: "none", color: "#111" }}>Selezione</a>
            <a href="/about" style={{ textDecoration: "none", color: "#111" }}>About</a>
            <a href="/contact" style={{ textDecoration: "none", color: "#111" }}>Contact</a>
            <a href="/privacy" style={{ textDecoration: "none", color: "#111" }}>Privacy</a>
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#111", fontWeight: 700 }}
            >
              Pagamento
            </a>
          </nav>

          <div style={{ display: "flex", gap: 8 }}>
            <a
              href="/"
              style={{
                border: "1px solid #111",
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
                border: "1px solid #ccc",
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
          Prodotti che richiedono conoscenza, non acquisto impulsivo.
        </h1>
        <p style={{ marginTop: 14, color: "#444", maxWidth: 760 }}>
          AcrossBay seleziona prodotti di alta qualità legati al benessere e alla vita quotidiana.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
          <a
            href="/selezione"
            style={{
              background: "#111",
              color: "white",
              padding: "10px 16px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Scopri la selezione
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
            Vai al pagamento
          </a>
        </div>
      </section>
    </main>
  );
}
