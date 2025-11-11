"use client";

import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/made-in-italy", label: "Made in Italy" },
  { href: "/amazon-findz", label: "Amazon" },
  { href: "/ebay-finds", label: "eBay" },
  { href: "/tiktok-trends", label: "TikTok" },
  { href: "/tuscany-virgin", label: "Tuscany" },
  { href: "/smart-club", label: "Smart Club" },
  { href: "/sicily-food", label: "Sicily Food" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Contenitore principale */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center sm:justify-start">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Across<span className="text-sky-500">Bay</span>
              <sup className="text-[10px] text-gray-500 ml-1 align-top">®</sup>
            </h1>
          </Link>

          {/* Barra menu visibile su TUTTI i dispositivi */}
          <nav className="mt-3 sm:mt-0 flex flex-wrap justify-center gap-3 text-sm text-gray-700">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-1 rounded hover:bg-gray-100 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
