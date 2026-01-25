"use client";

import { usePathname, useRouter } from "next/navigation";

const LANGS = [
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  // prende il locale corrente dal path: /it/... o /en/...
  const parts = pathname.split("/").filter(Boolean);
  const currentLocale = parts[0] === "it" || parts[0] === "en" ? parts[0] : "it";

  function switchTo(nextLocale) {
    if (nextLocale === currentLocale) return;

    // sostituisce il primo segmento con il locale scelto
    const rest = parts.slice(1); // tutto dopo il locale
    const nextPath = "/" + [nextLocale, ...rest].join("/");
    router.push(nextPath);
  }

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => switchTo(l.code)}
          aria-label={l.label}
          title={l.label}
          style={{
            border: "1px solid rgba(0,0,0,0.15)",
            background: l.code === currentLocale ? "rgba(0,0,0,0.06)" : "transparent",
            borderRadius: 10,
            padding: "6px 10px",
            cursor: "pointer",
            lineHeight: 1,
            fontSize: 16,
          }}
        >
          <span style={{ marginRight: 6 }}>{l.flag}</span>
          <span style={{ fontSize: 12, fontWeight: 600 }}>{l.label}</span>
        </button>
      ))}
    </div>
  );
}
