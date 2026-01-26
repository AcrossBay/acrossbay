"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

function getLocaleFromPath(pathname) {
  const seg = (pathname || "/").split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "it";
}

function stripLocale(pathname) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  if (parts[0] === "en") parts.shift();
  return "/" + parts.join("/");
}

function withLocale(locale, path) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === "en" ? `/en${clean === "/" ? "" : clean}` : clean;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);

  const t = useMemo(() => {
    return locale === "en"
      ? { home: "Home", selection: "Selection", about: "About", contact: "Contact", privacy: "Privacy" }
      : { home: "Home", selection: "Selezione", about: "About", contact: "Contact", privacy: "Privacy" };
  }, [locale]);

  const hrefHome = withLocale(locale, "/");
  const hrefSelection = withLocale(locale, "/health");   // <-- QUI
  const hrefAbout = withLocale(locale, "/about");
  const hrefContact = withLocale(locale, "/contact");
  const hrefPrivacy = withLocale(locale, "/privacy");

  function switchLang(nextLocale) {
    const base = stripLocale(pathname);
    router.push(withLocale(nextLocale, base === "" ? "/" : base));
  }

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href={hrefHome} className="font-semibold text-lg">
          AcrossBay
        </Link>

        <nav className="flex items-center gap-4 text-sm text-gray-700">
          <Link href={hrefHome} className="hover:underline">{t.home}</Link>
          <Link href={hrefSelection} className="hover:underline">{t.selection}</Link>
          <Link href={hrefAbout} className="hover:underline">{t.about}</Link>
          <Link href={hrefContact} className="hover:underline">{t.contact}</Link>
          <Link href={hrefPrivacy} className="hover:underline">{t.privacy}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => switchLang("it")}
            className={`px-2 py-1 rounded border text-sm ${locale === "it" ? "border-gray-900" : "border-gray-300"}`}
          >
            IT
          </button>
          <button
            type="button"
            onClick={() => switchLang("en")}
            className={`px-2 py-1 rounded border text-sm ${locale === "en" ? "border-gray-900" : "border-gray-300"}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
