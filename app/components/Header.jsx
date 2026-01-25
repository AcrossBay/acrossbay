"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/acrossbay-logo.png"
            alt="AcrossBay"
            width={180}
            height={40}
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-800">
          <Link href="/">Home</Link>
          <Link href="/health">Selezione</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

      </div>
    </header>
  );
}
