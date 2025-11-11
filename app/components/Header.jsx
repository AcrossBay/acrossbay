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
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          {/* Logo SVG */}
          <Image
            src="/acrossbay-logo.svg"
            alt="AcrossBay Logo"
            width={28}
            height={28}
            className="inline-block"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <span>AcrossBay</span>
        </Link>

        <nav className="hidden md:flex gap-4 text-sm">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline text-gray-700 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
