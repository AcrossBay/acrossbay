"use client";

import Link from "next/link";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/bJe3cxd9M8VIdaa9o2kw00";

export default function HomePage() {
  const cards = [
    {
      title: "Recupero & cura personale",
      desc: "Strumenti seri, spiegati bene. Non gadget.",
      img: "/images/recovery-care.jpg",
    },
    {
      title: "Grounding & decompressione",
      desc: "Oggetti di presenza: gesto lento, materiali essenziali.",
      img: "/images/grounding-decompression.jpg",
    },
    {
      title: "Linee erboristiche selezionate",
      desc: 'Filiera chiara, uso consapevole. Zero "miracoli".',
      img: "/images/herbal-selection.jpg",
    },
  ];

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      {/* NAV */}
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "white",
          borderBottom: "1px solid #eee",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ fontWeight: 700 }}>AcrossBay</div>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ textDecoration: "none", color: "#111" }}>Home</Link>
            <Link href="/selezione" style={{ textDecoration: "none", color: "#111" }}>Selezione</Link>
            <Link href="/about" style={{ textDecoration: "none", color: "#111" }}>About</Link>
            <Link href="/contact" style={{ textDecoration: "none", color: "#111" }}>Contact</Link>
            <Link href="/privacy" style={{ textDecoration: "none", color: "#111" }}>Privacy</Link>
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#111", fontWeight: 600 }}
            >
              Pagamento
            </a>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <Link
              href="/"
              style={{
                border: "1px solid #111",
                padding: "6px 10px",
                borderRadius: 8,
                textDecoration: "none",
                color: "#111",
                fontWeight: 700,
              }}
            >
              IT
            </Link>
            <Link
              href="/en"
              style={{
                border: "1px solid #ccc",
                padding: "6px 10px",
                borderRadius: 8,
                textDecoration: "none",
                color: "#111",
                fontWeight: 700,
              }}
            >
              EN
            </Link>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px 24px" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: 0 }}>
          Strumenti e prodotti che richiedono conoscenza, non acquisto impulsivo.
        </h1>
        <p style={{ marginTop: 14, color: "#444", maxWidth: 760 }}>
          AcrossBay seleziona prodotti di alta qualità legati al benessere e alla vita quotidiana.
          Pochi elementi, scelti e spiegati.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
          <Link
            href="/selezione"
            style={{
              background: "#111",
              color: "white",
              padding: "10px 16px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Scopri la selezione
          </Link>

          <Link
            href="/about"
            style={{
              border: "1px solid #ddd",
              color: "#111",
              padding: "10px 16px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Approccio
          </Link>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginTop: 28,
          }}
        >
          {cards.map((c) => (
            <Link
              key={c.title}
              href="/selezione"
              style={{
                textDecoration: "none",
                color: "#111",
                border: "1px solid #eee",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div style={{ height: 150, background: "#f6f6f6" }}>
                {/* immagine */}
                <img
                  src={c.img}
                  alt={c.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 800 }}>{c.title}</div>
                <div style={{ marginTop: 6, color: "#555", fontSize: 14 }}>{c.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
