import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">AcrossBay 🌊</h1>
          <nav className="space-x-6 text-sm">
            <a href="/">Home</a>
            <a href="/discover">Discover</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main className="p-8 flex justify-center items-start min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
