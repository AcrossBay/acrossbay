import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["300", "400", "600"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gray-50 text-gray-900`}>
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">AcrossBay 🌊</h1>
          <nav className="space-x-6 text-sm">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/discover" className="hover:text-blue-600">Discover</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </header>
        <main className="p-8 flex justify-center items-start min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
