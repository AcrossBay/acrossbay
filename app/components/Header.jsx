"use client";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/made-in-italy", label: "Made in Italy" },
  { href: "/amazon-findz", label: "Amazon" },
  { href: "/ebay-findz", label: "eBay" },
  { href: "/tiktok-trends", label: "TikTok" },
  { href: "/tuscan-origin", label: "Tuscany" },
  { href: "/smart-club", label: "Smart Club" },
  { href: "/sicily-food", label: "Sicily Food" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <Image
          src="/acrossbay-logo.svg"
          alt="AcrossBay Logo"
          width={130}
          height={35}
          priority
        />
        <span className="text-xl font-semibold text-gray-700">AcrossBay</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-600 hover:text-black transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
