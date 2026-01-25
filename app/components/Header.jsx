"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          AcrossBay
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/health" className="hover:text-black">Selezione</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
          <Link href="/privacy" className="hover:text-black">Privacy</Link>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-2 text-sm font-semibold">
        HEADER TEST
      </div>
    </header>
  );
}
