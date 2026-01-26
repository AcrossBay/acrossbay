export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>AcrossBay</h1>
      <p>Welcome.</p>

      <a
        href="https://buy.stripe.com/bJe3cxd9M8VIDaa90v2kw00"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "10px 14px",
          border: "1px solid #000",
          textDecoration: "none",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        Paga ora
      </a>
    </main>
  );
}
