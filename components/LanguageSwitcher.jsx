"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/links";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const locales = Array.isArray(LOCALES) ? LOCALES : ["it", "en"];
  const allowed = locales.filter((l) => l === "it" || l === "en");
  const current = allowed.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) || DEFAULT_LOCALE || "it";

  function goToLocale(nextLocale) {
    const parts = pathname.split("/").filter(Boolean);
    const first = parts[0];

    if (first && locales.includes(first)) parts.shift(); // rimuove qualunque locale (anche ro/bg)
    const rest = parts.length ? `/${parts.join("/")}` : "";

    router.push(`/${nextLocale}${rest}` || `/${nextLocale}`);
  }

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <button
        type="button"
        onClick={() => goToLocale("it")}
        aria-label="Italiano"
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: 18,
          opacity: current === "it" ? 1 : 0.45,
        }}
      >
        🇮🇹
      </button>

      <button
        type="button"
        onClick={() => goToLocale("en")}
        aria-label="English"
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: 18,
          opacity: current === "en" ? 1 : 0.45,
        }}
      >
        🇬🇧
      </button>
    </div>
  );
}
