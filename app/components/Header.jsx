"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isEn = pathname.startsWith("/en");

  const switchTo = (lang) => {
    if (lang === "en") {
      router.push(pathname === "/" ? "/en" : `/en${pathname}`);
    } else {
      router.push(pathname.replace(/^\/en/, "") || "/");
    }
  };

  return (
    <header className="border-b">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={isEn ? "/en" : "/"} className="font-semibold">
          AcrossBay
        </Link>

        <div className="flex gap-6 items-center">
          <Link href={isEn ? "/en" : "/"}>Home</Link>
          <Link href={isEn ? "/en/selezione" : "/selezione"}>Selezione</Link>
          <Link href={isEn ? "/en/about" : "/about"}>About</Link>
          <Link href={isEn ? "/en/contact" : "/contact"}>Contact</Link>

          <div className="flex gap-2 ml-4">
            <button
              onClick={() => switchTo("it")}
              className={!isEn ? "font-bold" : ""}
            >
              IT
            </button>
            <button
              onClick={() => switchTo("en")}
              className={isEn ? "font-bold" : ""}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
