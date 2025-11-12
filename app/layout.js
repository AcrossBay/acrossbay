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
        {/* HEADER fisso */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/85 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3 flex-wrap">
            {/* LOGO */}
            <Link href="/" className="font-extrabold leading-none text-[22px] md:text-2xl tracking-tight">
              <span>Across</span><span className="text-sky-600">Bay</span>
            </Link>

            {/* MENU completo */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[13px] md:text-sm">
              <Link href="/amazon" className="hover:underline">Amazon</Link>
              <Link href="/ebay" className="hover:underline">eBay</Link>
              <Link href="/tiktok" className="hover:underline">TikTok</Link>
              <Link href="/tuscany" className="hover:underline">Tuscany</Link>
              <Link href="/discover" className="hover:underline">Discover</Link>
              <Link href="/made-in-italy" className="hover:underline">Made in Italy</Link>
              <Link href="/sicily-food" className="hover:underline">Sicily Food</Link>
              <Link href="/smart-club" className="hover:underline">Smart Club</Link>
              <Link href="/herbal-bay" className="hover:underline">Herbal Bay</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
            </div>
          </nav>
        </header>

        {/* MAIN con spazio per l'header fisso */}
        <main className="pt-[76px] md:pt-[84px] mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-10">
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
