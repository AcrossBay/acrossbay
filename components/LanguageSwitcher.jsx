"use client";

import { usePathname, useRouter } from "next/navigation";

const LANGUAGES = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.startsWith("/en") ? "en" : "it";

  function switchLanguage(lang) {
    if (lang === currentLang) return;

    if (lang === "en") {
      router.push("/en");
    } else {
      router.push("/");
    }
  }

  return (
    <select
      value={currentLang}
      onChange={(e) => switchLanguage(e.target.value)}
    >
      {LANGUAGES.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
