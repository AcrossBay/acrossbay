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
      {/* B2B button overlay (does not affect layout) */}
      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}>
        <a
          href="https://acrossbay-b2b-portal.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 16px",
            textDecoration: "none",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          Area B2B
        </a>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          padding: 24,
          boxSizing: "border-box",
        }}
      >
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
