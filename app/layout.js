export const metadata = {
  title: "AcrossBay",
  description: "AcrossBay",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* B2B button overlay (non tocca il layout del sito) */}
        <div style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}>
          <a
            href="https://acrossbay-b2b-portal.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "black",
              color: "white",
              padding: "10px 16px",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Area B2B
          </a>
        </div>

        {children}
      </body>
    </html>
  );
}
