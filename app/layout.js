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
        {/* HEADER fisso con hamburger mobile */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="font-extrabold leading-none text-[20px] md:text-2xl tracking-tight">
              <span>Across</span><span className="text-sky-600">Bay</span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/amazon" className="hover:underline">Amazon</Link>
              <Link href="/ebay" className="hover:underline">eBay</Link>
              <Link href="/tiktok" className="hover:underline">TikTok</Link>
              <Link href="/tuscany" className="hover:underline">Tuscany</Link>
              <Link href="/discover" className="hover:underline">Discover</Link>
              <Link href="/made-in-italy" className="hover:underline">Made in Italy</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
            </div>

            {/* MOBILE MENU (hamburger con <details>) */}
            <details className="md:hidden">
              <summary className="list-none cursor-pointer px-3 py-2 rounded-lg border text-sm">
                Menu
              </summary>
              <div className="mt-2 bg-white border rounded-xl p-3 flex flex-col text-sm">
                <Link href="/amazon" className="py-2">Amazon</Link>
                <Link href="/ebay" className="py-2">eBay</Link>
                <Link href="/tiktok" className="py-2">TikTok</Link>
                <Link href="/tuscany" className="py-2">Tuscany</Link>
                <Link href="/discover" className="py-2">Discover</Link>
                <Link href="/made-in-italy" className="py-2">Made in Italy</Link>
                <Link href="/about" className="py-2">About</Link>
                <Link href="/contact" className="py-2">Contact</Link>
                <Link href="/privacy" className="py-2">Privacy</Link>
              </div>
            </details>
          </nav>
        </header>

        {/* MAIN con offset per header fisso */}
        <main className="pt-[68px] md:pt-[84px] mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10">
          {children}
        </main>

        {/* FOOTER compatto su mobile */}
        <footer className="mt-8 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 text-[12px] md:text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} AcrossBay · All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <a href="mailto:massi@across-bay.com" className="hover:underline">massi@across-bay.com</a>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 md:px-6 pb-3 md:pb-4 text-[11px] md:text-xs text-gray-500">
            Trend 2025 · Tech-lifestyle minimal e accessibili. Alcuni link sono affiliati; potremmo ricevere una commissione senza costi aggiuntivi per te.
          </div>
        </footer>
      </body>
    </html>
  );
}
