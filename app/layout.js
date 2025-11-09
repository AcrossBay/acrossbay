import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>AcrossBay — Lifestyle</title>
        <meta name="description" content="AcrossBay — coastal lifestyle & essentials" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white/90 backdrop-blur shadow-sm">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold tracking-tight">
              AcrossBay <span className="align-middle">🌊</span>
            </a>
            <nav className="flex gap-6 text-sm">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/discover" className="hover:text-blue-600">Discover</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6">{children}</main>

        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} AcrossBay. All rights reserved.</p>
            <p className="text-gray-500">Coastal lifestyle. Minimal design.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
