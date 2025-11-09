import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">AcrossBay 🌊</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/discover" className="hover:text-blue-600">Discover</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </header>
        <main className="p-8 flex justify-center items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
