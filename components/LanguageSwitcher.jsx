"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const current = pathname.startsWith("/en") ? "en" : "it";

  function toLocalePath(nextLocale) {
    let p = pathname;

    if (p.startsWith("/en")) p = p.slice(3) || "/";
    if (p.startsWith("/it")) p = p.slice(3) || "/";

    if (!p.startsWith("/")) p = "/" + p;

    if (nextLocale === "en") return "/en" + (p === "/" ? "" : p);
    return "/it" + (p === "/" ? "" : p);
  }

  return (
    <select
      value={current}
      onChange={(e) => router.push(toLocalePath(e.target.value))}
      className="border border-gray-300 rounded px-2 py-1 text-sm"
      aria-label="Language"
    >
      <option value="it">IT</option>
      <option value="en">EN</option>
    </select>
  );
}
