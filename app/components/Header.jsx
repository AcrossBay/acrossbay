"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/made-in-italy", label: "Made in Italy" },
  { href: "/amazon-findz", label: "Amazon" },
  { href: "/ebay-findz", label: "eBay" },
  { href: "/tiktok", label: "TikTok" },
  { href: "/tuscany", label: "Tuscany" },
  { href: "/smart-club", label: "Smart Club" },
  { href: "/sicily-food", label: "Sicily Food" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/acrossbay-logo.svg"
            alt="AcrossBay logo"
            width={48}
            height={48}
            className="inline-block drop-shadow-sm"
          />
          <span className="text-2xl font-semibold tracking-tight text-gray-800">
            Across<span className="text-sky-600">Bay</span>
            <sup className="ml-0.5 text-base text-gray-500 align-top">®</sup>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-sky-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
