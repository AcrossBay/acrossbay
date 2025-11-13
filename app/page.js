"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DICT } from "@/lib/i18n";

export default function Page() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("acrossbay_lang");
      if (saved && DICT[saved]) setLang(saved);
    } catch {}
  }, []);
  const T = DICT[lang] ?? DICT.en;

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="rounded-2xl bg-gray-50 p-5 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{T.heroTitle}</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          {T.heroDesc}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card title="Amazon"  href="/amazon"  img="/projector-mini.webp" />
        <Card title="eBay"    href="/ebay"    img="/retro-console.webp" />
        <Card title="TikTok"  href="/tiktok"  img="/led-strip.webp" />
        <Card title="Tuscany" href="/tuscany" img="/linen-shirt.webp" />
      </div>
    </section>
  );
}

function Card({ title, href, img }) {
  return (
    <Link href={href} className="block border rounded-2xl overflow-hidden hover:shadow transition bg-white">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        <p className="text-xs md:text-sm text-gray-500">Discover the {title} picks →</p>
      </div>
    </Link>
  );
}
