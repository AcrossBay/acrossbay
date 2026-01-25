import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "AcrossBay",
  description: "AcrossBay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
