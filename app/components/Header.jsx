"use client";

import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/",               label: "Home" },
  { href: "/discover",       label: "Discover" },
  { href: "/made-in-italy",  label: "Made in Italy" },
  { href: "/amazon-findz",   label: "Amazon" },
  { href: "/ebay-finds",     label: "eBay" },          // <-- deve esistere app/ebay-finds/page.jsx
  { href: "/tiktok-trends",  label: "TikTok" },
  { href: "/tuscany-virgin", label: "Tuscany" },       // <-- deve esistere app/tuscany-virgin/page.jsx
  { href: "/smart-club",     label: "Smart Club" },
  { href: "/sicily-food",    label: "Sicily Food" },
  { href: "/contact",        label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          {/* Mostra il logo se presente, altrimenti il testo */}
          <Image
            src="/acrossbay-logo.svg"
            alt="AcrossBay"
            width={28}
            height={28}
            className="inline-block"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <span>AcrossBay</span>
        </Link>

        <nav className="hidden md:flex gap-4 text-sm">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
