import "./globals.css";

export const metadata = {
  title: "AcrossBay",
  description: "Coastal lifestyle — minimal design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="bg-white/70 backdrop-blur shadow-sm">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold tracking-tight">
              AcrossBay <span className="ml-1">🌊</span>
            </a>
            <nav className="space-x-6 text-sm">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/discover" className="hover:text-blue-600">Discover</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-12">
          {children}
        </main>

        <footer className="border-t bg-white/60">
          <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-slate-500 flex items-center justify-between">
            <p>© {new Date().getFullYear()} AcrossBay. Coastal lifestyle, minimal design.</p>
            <a href="/newsletter" className="hover:text-blue-600">Join our newsletter →</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
