"use client";

import "./globals.css";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { DICT } from "@/lib/i18n";

export default function RootLayout({ children }) {
  // lingua
  const [lang, setLang] = useState("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("acrossbay_lang");
      if (saved && DICT[saved]) setLang(saved);
    } catch {}
  }, []);
  const T = useMemo(() => DICT[lang] ?? DICT.en, [lang]);

  // stato menu mobile
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const NavLinks = ({ className = "", onItem }) => (
    <div className={className}>
      <Link href="/amazon" onClick={onItem} className="py-2"> {T.nav.amazon} </Link>
      <Link href="/ebay" onClick={onItem} className="py-2"> {T.nav.ebay} </Link>
      <Link href="/tiktok" onClick={onItem} className="py-2"> {T.nav.tiktok} </Link>
      <Link href="/tuscany" onClick={onItem} className="py-2"> {T.nav.tuscany} </Link>
      <Link href="/discover" onClick={onItem} className="py-2"> {T.nav.discover} </Link>
      <Link href="/made-in-italy" onClick={onItem} className="py-2"> {T.nav.made} </Link>
      <Link href="/xmas-deals" onClick={onItem} className="py-2"> {T.nav.xmas} </Link>
      <Link href="/about" onClick={onItem} className="py-2"> {T.nav.about} </Link>
      <Link href="/contact" onClick={onItem} className="py-2"> {T.nav.contact} </Link>
      <Link href="/privacy" onClick={onItem} className="py-2"> {T.nav.privacy} </Link>
    </div>
  );

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-white text-gray-800 antialiased">
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
            {/* LOGO */}
            <Link href="/" onClick={closeMenu} className="font-extrabold leading-none text-[20px] md:text-2xl tracking-tight">
              <span>Across</span><span className="text-sky-600">Bay</span>
            </Link>

            {/* DESKTOP MENU */}
            <NavLinks className="hidden md:flex items-center gap-6 text-sm" />

            {/* LANG + HAMBURGER */}
            <div className="flex items-center gap-2 md:gap-3">
              <LanguageSwitcher value={lang} onChange={setLang} />
              <button
                className="md:hidden px-3 py-2 border rounded-lg text-sm"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Open Menu"
              >
                {T.menu}
              </button>
            </div>
          </nav>

          {/* MOBILE MENU (overlay) */}
          {open && (
            <div className="md:hidden border-t bg-white">
              <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col text-sm">
                <NavLinks onItem={closeMenu} className="flex flex-col" />
              </div>
            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="pt-[68px] md:pt-[84px] mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10">
          {/* Passiamo la lingua nel context minimo via data-attr, utile se serve leggerla nei client components */}
          <div data-lang={lang}>{children}</div>
        </main>

        {/* FOOTER */}
        <footer className="mt-8 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 text-[12px] md:text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} AcrossBay · All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <Link href="/privacy" className="hover:underline">{T.nav.privacy}</Link>
              <a href="mailto:massi@across-bay.com" className="hover:underline">massi@across-bay.com</a>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 md:px-6 pb-3 md:pb-4 text-[11px] md:text-xs text-gray-500">
            {T.footerNote}
          </div>
        </footer>
      </body>
    </html>
  );
}
