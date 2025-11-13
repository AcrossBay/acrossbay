"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DICT } from "@/lib/i18n";

export default function Page(){
  const [lang,setLang]=useState("en");
  useEffect(()=>{try{const s=localStorage.getItem("acrossbay_lang"); if(s&&DICT[s]) setLang(s);}catch{}},[]);
  const T=(DICT[lang]??DICT.en).pages.xmas;

  const cards=[
    { key:"throw", img:"/throw.jpg", href:"/xmas-deals" },
    { key:"projector", img:"/projector-mini.webp", href:"/xmas-deals" },
    { key:"led", img:"/led-strip.webp", href:"/xmas-deals" },
  ];

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="rounded-2xl bg-gray-50 p-5 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{T.title} · AcrossBay</h1>
        <p className="text-gray-700 text-sm md:text-base">{T.subtitle}</p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3">
        {cards.map(c=>{
          const copy=T.items[c.key];
          return (
            <Link key={c.key} href={c.href} className="block border rounded-2xl overflow-hidden bg-white hover:shadow">
              <div className="aspect-[4/3]"><img src={c.img} alt={copy.title} className="w-full h-full object-cover"/></div>
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-base">{copy.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{copy.desc}</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{copy.cta}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
