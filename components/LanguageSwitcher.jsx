"use client";

import { LANGS } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function LanguageSwitcher({ value, onChange }) {
  const [lang, setLang] = useState(value || "en");

  useEffect(() => {
    setLang(value || "en");
  }, [value]);

  const handle = (e) => {
    const v = e.target.value;
    setLang(v);
    try {
      localStorage.setItem("acrossbay_lang", v);
    } catch {}
    onChange?.(v);
  };

  return (
    <select
      value={lang}
      onChange={handle}
      className="border rounded-lg px-2 py-1 text-sm bg-white"
      aria-label="Language"
    >
      {LANGS.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
