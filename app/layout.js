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
        {/* Header */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <a
            href="https://acrossbay-b2b-portal.vercel.app/login"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "14px",
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
