import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AcrossBay",
  description: "Trend 2025 · Tech-lifestyle, minimal, accessibili",
  metadataBase: new URL("https://www.across-bay.com"),
  openGraph: {
    title: "AcrossBay – Tech-Lifestyle 2025",
    description: "Selezione curata da Amazon, eBay, TikTok e Made in Italy.",
    url: "https://www.across-bay.com",
    siteName: "AcrossBay",
    images: [{ url: "/projector-mini.webp" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcrossBay",
    description: "Tech-lifestyle 2025 · minimal e accessibili",
    images: ["/projector-mini.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800 antialiased">
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
            <Link href="/" className="font-extrabold leading-none text-[20px] md:text-2xl tracking-tight">
              <span>Across</span><span className="text-sky-600">Bay</span>
            </Link>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/amazon">Amazon</Link>
              <Link href="/ebay">eBay</Link>
              <Link href="/tiktok">TikTok</Link>
              <Link href="/tuscany">Tuscany</Link>
              <Link href="/discover">Discover</Link>
              <Link href="/made-in-italy">Made in Italy</Link>
              <Link href="/xmas-deals">Promo Natale</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
            </div>

            {/* MOBILE */}
            <details className="md:hidden">
              <summary className="list-none cursor-pointer px-3 py-2 rounded-lg border text-sm">Menu</summary>
              <div className="mt-2 bg-white border rounded-xl p-3 flex flex-col text-sm">
                <Link href="/amazon" className="py-2">Amazon</Link>
                <Link href="/ebay" className="py-2">eBay</Link>
                <Link href="/tiktok" className="py-2">TikTok</Link>
                <Link href="/tuscany" className="py-2">Tuscany</Link>
                <Link href="/discover" className="py-2">Discover</Link>
                <Link href="/made-in-italy" className="py-2">Made in Italy</Link>
                <Link href="/xmas-deals" className="py-2">Promo Natale</Link>
                <Link href="/about" className="py-2">About</Link>
                <Link href="/contact" className="py-2">Contact</Link>
                <Link href="/privacy" className="py-2">Privacy</Link>
              </div>
            </details>
          </nav>
        </header>

        {/* MAIN */}
        <main className="pt-[68px] md:pt-[84px] mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10">
          {children}
        </main>

        {/* FOOTER */}
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
