import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AcrossBay",
  description: "Trend 2025 · Tech-lifestyle, minimal, accessibili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800 antialiased">
        {/* HEADER */}
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3 flex-wrap">
            {/* LOGO: Across + Bay blu, no tagli */}
            <Link href="/" className="font-extrabold leading-none text-[22px] md:text-2xl tracking-tight">
              <span>Across</span><span className="text-sky-600">Bay</span>
            </Link>

            {/* MENU: visibile e a capo se serve */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[13px] md:text-sm">
              <Link href="/amazon" className="hover:underline">Amazon</Link>
              <Link href="/ebay" className="hover:underline">eBay</Link>
              <Link href="/tiktok" className="hover:underline">TikTok</Link>
              <Link href="/tuscany" className="hover:underline">Tuscany</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-10">
          {children}
        </main>

        {/* FOOTER compatto */}
        <footer className="mt-10 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 text-[12px] md:text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} AcrossBay · All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <a href="mailto:massi@across-bay.com" className="hover:underline">massi@across-bay.com</a>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 md:px-6 pb-4 text-[11px] md:text-xs text-gray-500">
            Trend 2025 · Tech-lifestyle minimal e accessibili. Alcuni link sono affiliati; potremmo ricevere una commissione senza costi aggiuntivi per te.
          </div>
        </footer>
      </body>
    </html>
  );
}
