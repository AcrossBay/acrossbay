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
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between h-14">
        {/* LOGO testo + ® vicino, senza duplicati */}
        <Link href="/" className="inline-flex items-center gap-1 select-none">
          <span className="font-semibold tracking-tight text-xl">
            <span>Across</span>
            <span className="text-sky-500">Bay</span>
          </span>
          <span className="align-top text-[10px] leading-none translate-y-[-6px]">®</span>
        </Link>

        <nav className="hidden md:flex gap-5 text-sm">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
