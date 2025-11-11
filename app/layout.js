import "./globals.css";

export const metadata = {
  title: "AcrossBay",
  description: "Smart finds from trusted marketplaces worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#ffffff", color: "#0f172a" }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
