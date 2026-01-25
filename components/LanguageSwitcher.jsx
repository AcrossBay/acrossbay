"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE } from "../lib/links";

const FLAGS = {
  it: "🇮🇹",
  en: "🇬🇧",
};

function getLocaleFromPath(pathname) {
  const seg = (pathname || "/").split("/")[1];
  return LOCALES.includes(seg) ? seg : null;
}

function stripLocale(pathname) {
  const parts = (pathname || "/").split("/");
  const seg = parts[1];
  if (LOCALES.includes(seg)) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/+$/, "") || "/";
  }
  return pathname || "/";
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const current = getLocaleFromPath(pathname) || DEFAULT_LOCALE;
  const rest = stripLocale(pathname);

  const go = (code) => {
    // Con middleware disattivo: usiamo query semplice
    // /?lang=en  oppure /?lang=it
    const target = rest === "/" ? `/?lang=${code}` : `${rest}?lang=${code}`;
    router.push(target);
  };

  return (
    <div className="flex items-center gap-2">
      {["it", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => go(code)}
          className={`px-2 py-1 rounded border text-sm ${
            current === code
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-200"
          }`}
        >
          {FLAGS[code]}
        </button>
      ))}
    </div>
  );
}
