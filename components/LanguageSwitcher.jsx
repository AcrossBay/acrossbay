"use client";

import { usePathname, useRouter } from "next/navigation";

const LOCALES = [
  { code: "it", label: "🇮🇹" },
  { code: "en", label: "🇬🇧" },
];

function getLocaleFromPath(pathname) {
  const seg = (pathname || "/").split("/")[1];
  return seg === "it" || seg === "en" ? seg : null;
}

function stripLocale(pathname) {
  const parts = (pathname || "/").split("/");
  const seg = parts[1];
  if (seg === "it" || seg === "en") {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/+$/, "") || "/";
  }
  return pathname || "/";
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const current = getLocaleFromPath(pathname) || "it";
  const rest = stripLocale(pathname);

  const go = (code) => {
    const target = `/${code}${rest === "/" ? "" : rest}`;
    router.push(target);
  };

  return (
    <div className="flex items-center gap-2">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => go(l.code)}
          className={`px-2 py-1 rounded border text-sm ${
            current === l.code ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-200"
          }`}
          aria-label={l.code}
          type="button"
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
