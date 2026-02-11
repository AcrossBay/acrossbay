export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          padding: 24,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href="https://acrossbay-b2b-portal.vercel.app/login"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: 4,
              fontSize: 14,
            }}
          >
            Area B2B
          </a>
        </div>

        <h1 style={{ marginTop: 0 }}>AcrossBay</h1>
        <p>Welcome.</p>

        <a
          href="INSERISCI_QUI_IL_TUO_LINK_STRIPE"
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
      </div>
    </main>
  );
}
