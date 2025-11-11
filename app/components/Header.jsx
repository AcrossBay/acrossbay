"use client";

import Link from "next/link";
import Image from "next/image";

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
    <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        {/* brand: SOLO UNA VOLTA */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/acrossbay-logo.svg"
            alt="AcrossBay"
            width={140}
            height={28}
            priority
            className="h-7 w-auto"
          />
          <sup className="text-xs align-super">®</sup>
          <span className="sr-only">AcrossBay</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
