"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Left: logo / brand */}
        <Link href="/" className="text-lg font-semibold text-gray-900">
          AcrossBay
        </Link>

        {/* Center: nav */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/health">Selezione</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

        {/* Right: language (IT/EN only) */}
        <div className="flex items-center gap-2">
          <a
            href="/it"
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700"
            aria-label="Italiano"
            title="Italiano"
          >
            IT
          </a>
          <a
            href="/en"
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700"
            aria-label="English"
            title="English"
          >
            EN
          </a>
        </div>
      </div>
    </header>
  );
}
