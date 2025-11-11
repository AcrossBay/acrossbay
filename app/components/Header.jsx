"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/made-in-italy", label: "Made in Italy" },
  { href: "/amazon", label: "Amazon" },
  { href: "/ebay", label: "eBay" },
  { href: "/tiktok", label: "TikTok" },
  { href: "/tuscany", label: "Tuscany" },
  { href: "/smart-club", label: "Smart Club" },
  { href: "/sicily-food", label: "Sicily Food" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-1" onClick={() => setOpen(false)}>
          <Image
            src="/acrossbay-logo.svg"
            alt="AcrossBay"
            width={160}
            height={28}
            priority
          />
          {/* ® vicino al logo */}
          <sup className="ml-1 -mt-3 text-xs text-gray-600">®</sup>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          {/* icona semplice */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-gray-800 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
