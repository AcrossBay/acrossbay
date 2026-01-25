"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/health", label: "Selezione" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/acrossbay-logo.png"
            alt="AcrossBay"
            width={180}
            height={40}
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
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
