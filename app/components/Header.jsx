"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/health", label: "Selezione" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ];

  const [lang, setLang] = useState("IT");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* LOGO (testo, non può sparire) */}
        <Link href="/" className="text-xl font-semibold">
          <span className="text-black">Across</span>
          <span className="text-blue-600">Bay</span>
        </Link>

        {/* NAV */}
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-black">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* LANGUAGE */}
          <div className="flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700"
              aria-label="Language"
            >
              <option value="IT">IT</option>
              <option value="EN">EN</option>
              <option value="RO">RO</option>
              <option value="BG">BG</option>
            </select>
          </div>
        </div>
      </div>

      {/* NAV mobile minimale */}
      <div className="mx-auto max-w-6xl px-4 pb-2 md:hidden">
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-gray-700">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-black">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
