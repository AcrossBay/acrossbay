"use client";

import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/",               label: "Home" },
  { href: "/discover",       label: "Discover" },
  { href: "/made-in-italy",  label: "Made in Italy" },
  { href: "/amazon-findz",   label: "Amazon" },
  { href: "/ebay-finds",     label: "eBay" },
  { href: "/tiktok-trends",  label: "TikTok" },
  { href: "/tuscany-virgin", label: "Tuscany" },
  { href: "/smart-club",     label: "Smart Club" },
  { href: "/sicily-food",    label: "Sicily Food" },
  { href: "/contact",        label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* Logo singolo */}
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <Image
            src="/acrossbay-logo.svg"
            alt="AcrossBay Logo"
            width={180}
            height={60}
            className="object-contain"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </Link>

        {/* Menu principale */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
