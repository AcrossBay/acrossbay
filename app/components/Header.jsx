"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LANGS = ["it", "en", "ro", "bg"];

function getLangFromPath(pathname) {
  const first = (pathname.split("/")[1] || "").toLowerCase();
  return LANGS.includes(first) ? first : "it";
}

function stripLang(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const first = (parts[0] || "").toLowerCase();
  if (LANGS.includes(first)) return "/" + parts.slice(1).join("/");
  return pathname || "/";
}

function withLang(lang, pathname) {
  const clean = stripLang(pathname);
  const normalized = clean.startsWith("/") ? clean : `/${clean}`;
  if (lang === "it") return normalized === "/undefined" ? "/" : normalized;
  return `/${lang}${normalized === "/undefined" ? "/" : normalized}`;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const lang = getLangFromPath(pathname);

  const labels = {
    it: { home: "Home", sel: "Selezione", about: "About", contact: "Contact", privacy: "Privacy" },
    en: { home: "Home", sel: "Selection", about: "About", contact: "Contact", privacy: "Privacy" },
    ro: { home: "Acasă", sel: "Selecție", about: "Despre", contact: "Contact", privacy: "Confidențialitate" },
    bg: { home: "Начало", sel: "Селекция", about: "За нас", contact: "Контакт", privacy: "Поверителност" },
  }[lang];

  const navLinks = [
    { href: withLang(lang, "/"), label: labels.home },
    { href: withLang(lang, "/health"), label: labels.sel },
    { href: withLang(lang, "/about"), label: labels.about },
    { href: withLang(lang, "/contact"), label: labels.contact },
    { href: withLang(lang, "/privacy"), label: labels.privacy },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href={withLang(lang, "/")} className="text-xl font-semibold">
          <span className="text-black">Across</span>
          <span className="text-blue-600">Bay</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-black">
                {l.label}
              </Link>
            ))}
          </nav>

          <select
            value={lang.toUpperCase()}
            onChange={(e) => {
              const newLang = e.target.value.toLowerCase();
              router.push(withLang(newLang, pathname));
            }}
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
