"use client";

import { usePathname, useRouter } from "next/navigation";

const LANGUAGES = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split("/")[1] === "en" ? "en" : "it";

  const switchLanguage = (lang) => {
    if (lang === currentLang) return;

    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "it" || segments[0] === "en") {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }

    router.push("/" + segments.join("/"));
  };

  return (
    <div style={{ position: "relative" }}>
      <select
        value={currentLang.toUpperCase()}
        onChange={(e) => switchLanguage(e.target.value.toLowerCase())}
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.label}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
