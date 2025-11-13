"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DICT } from "@/lib/i18n";

export default function Page(){
  const [lang,setLang]=useState("en");
  useEffect(()=>{try{const s=localStorage.getItem("acrossbay_lang"); if(s&&DICT[s]) setLang(s);}catch{}},[]);
  const T=(DICT[lang]??DICT.en).pages.contact;

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="rounded-2xl bg-gray-50 p-5 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{T.title}</h1>
        <p className="text-gray-700 text-sm md:text-base">
          {T.body}
          <Link href="mailto:massi@across-bay.com" className="underline">massi@across-bay.com</Link>
        </p>
      </div>
    </section>
  );
}
