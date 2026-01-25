// FILE: components/LanguageSwitcher.jsx
// AZIONE: SOSTITUISCI TUTTO IL CONTENUTO DEL FILE CON QUESTO BLOCCO

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function pathWithLocale(pathname, locale) {
  const p = pathname || "/";
  const parts = p.split("/").filter(Boolean);

  // se il primo segmento è una lingua, rimpiazzala
  if (parts[0] === "it" || parts[0] === "en" || parts[0] === "ro" || parts[0] === "bg") {
    parts[0] = locale;
  } else {
    parts.unshift(locale);
  }

  return "/" + parts.join("/");
}

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const itHref = pathWithLocale(pathname, "it");
  const enHref = pathWithLocale(pathname, "en");

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Link href={itHref} title="Italiano" style={{ textDecoration: "none" }}>
        🇮🇹
      </Link>
      <Link href={enHref} title="English" style={{ textDecoration: "none" }}>
        🇬🇧
      </Link>
    </div>
  );
}
