"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ imageSrc, imageAlt, title, subtitle, href }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-200 bg-white/80 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{subtitle}</p>}
        <span className="inline-block mt-3 text-sm font-medium text-gray-800 group-hover:underline">
          View →
        </span>
      </div>
    </Link>
  );
}
