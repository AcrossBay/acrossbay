export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px", fontFamily: "system-ui" }}>
      <h1 style={{ marginTop: 0 }}>Contact</h1>
      <p style={{ color: "#444" }}>Contact page is live.</p>

      <a
        href="/en"
        style={{
          display: "inline-block",
          border: "1px solid #ddd",
          color: "#111",
          padding: "10px 14px",
          borderRadius: 10,
          textDecoration: "none",
          fontWeight: 800,
          marginTop: 12,
        }}
      >
        Back to Home
      </a>
    </main>
  );
}
