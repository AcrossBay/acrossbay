import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AcrossBay",
  description: "Trend 2025 · Tech-lifestyle, minimal, accessibili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        <header className="border-b">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between flex-wrap">
            <Link href="/" className="font-bold text-2xl tracking-tight">AcrossBay</Link>
            <div className="flex flex-wrap gap-5 text-sm mt-3 md:mt-0">
              <Link href="/amazon" className="hover:underline">Amazon</Link>
              <Link href="/ebay" className="hover:underline">eBay</Link>
              <Link href="/tiktok" className="hover:underline">TikTok</Link>
              <Link href="/tuscany" className="hover:underline">Tuscany</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} AcrossBay · All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <a href="mailto:massi@across-bay.com" className="hover:underline">massi@across-bay.com</a>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-gray-500">
            Trend 2025 · Tech-lifestyle minimal e accessibili. Alcuni link sono affiliati; potremmo ricevere una commissione senza costi aggiuntivi per te.
          </div>
        </footer>
      </body>
    </html>
  );
}
