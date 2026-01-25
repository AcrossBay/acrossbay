// acrossbay/components/LanguageSwitcher.jsx
"use client";

import { usePathname, useRouter } from "next/navigation";

const LOCALES = ["it", "en"];
const DEFAULT_LOCALE = "it";

function getLocaleFromPath(pathname) {
  const seg = pathname.split("/")[1];
  return LOCALES.includes(seg) ? seg : DEFAULT_LOCALE;
}

function buildPathWithLocale(pathname, nextLocale) {
  const parts = pathname.split("/");
  const current = parts[1];

  if (LOCALES.includes(current)) {
    parts[1] = nextLocale; // replace locale segment
    return parts.join("/") || "/";
  }

  // no locale segment -> prefix it
  return `/${nextLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const currentLocale = getLocaleFromPath(pathname);

  const go = (locale) => {
    const nextPath = buildPathWithLocale(pathname, locale);
    router.push(nextPath);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <button
        type="button"
        onClick={() => go("it")}
        title="Italiano"
        aria-label="Italiano"
        style={{
          fontSize: 18,
          lineHeight: 1,
          opacity: currentLocale === "it" ? 1 : 0.5,
          cursor: "pointer",
          background: "transparent",
          border: "none",
          padding: 0,
        }}
      >
        🇮🇹
      </button>

      <button
        type="button"
        onClick={() => go("en")}
        title="English"
        aria-label="English"
        style={{
          fontSize: 18,
          lineHeight: 1,
          opacity: currentLocale === "en" ? 1 : 0.5,
          cursor: "pointer",
          background: "transparent",
          border: "none",
          padding: 0,
        }}
      >
        🇬🇧
      </button>
    </div>
  );
}
