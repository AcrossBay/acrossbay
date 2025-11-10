import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "AcrossBay — Coastal Lifestyle Trends",
  description:
    "Discover smart, minimal, and trend-driven finds from across the world. AcrossBay — where coastal design meets everyday living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gradient-to-b from-sky-50 to-white text-gray-800">
        <header className="flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-md shadow-sm sticky top-0">
          <h1 className="text-2xl font-semibold text-sky-700">AcrossBay 🌊</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <a href="/">Home</a>
            <a href="/discover">Discover</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>

        <footer className="text-center py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} AcrossBay. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
