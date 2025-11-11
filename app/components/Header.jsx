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
  { href: "/contact", label: "Contact" },
  { href: "/sicily-food",label:"sicily-food"},
];

export default function Header() {
  return (
    <header className="sticky top-0 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-6 flex justify-between items-center h-14">
        <Link href="/" className="font-semibold tracking-tight text-teal-800">
          AcrossBay
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-teal-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
