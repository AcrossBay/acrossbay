"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0f766e"
            className="w-6 h-6"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.9V19a8 8 0 010-14v1.1a7 7 0 000 11.8z" />
          </svg>
          <span className="text-2xl font-semibold text-teal-800">AcrossBay</span>
        </Link>

        <nav className="flex gap-6 text-gray-700">
          <NavLink href="/" current={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/discover" current={pathname === "/discover"}>
            Discover
          </NavLink>
          <NavLink href="/about" current={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/contact" current={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, current, children }) {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-teal-700 ${
        current ? "text-teal-700 font-semibold border-b-2 border-teal-700 pb-1" : ""
      }`}
    >
      {children}
    </Link>
  );
}
