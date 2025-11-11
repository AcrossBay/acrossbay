import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "AcrossBay",
  description: "Smart Made in Italy – timeless essentials from global marketplaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
