import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-slate-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-slate-200/60">
          <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">
              AcrossBay <span aria-hidden>🌊</span>
            </a>
            <div className="flex items-center gap-6 text-sm">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/discover" className="hover:text-blue-600">Discover</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="max-w-5xl mx-auto px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-slate-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} AcrossBay. All rights reserved.</p>
            <p>Coastal lifestyle. Minimal design.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
