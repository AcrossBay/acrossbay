export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>AcrossBay</h1>
      <p>Welcome.</p>

      <a
        href="/checkout"
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "10px 14px",
          border: "1px solid #000",
          textDecoration: "none",
        }}
      >
        Go to Checkout
      </a>
    </main>
  );
}
