export const metadata = {
  title: "AcrossBay | Smart Lifestyle",
  description: "Smart and stylish essentials curated from global marketplaces.",
};

import Image from "next/image";
import Link from "next/link";

const items = [
  {
    href: "/made-in-italy",
    title: "Linen Shirt",
    img: "/linen-shirt.jpg",
  },
  {
    href: "/made-in-italy",
    title: "Ceramics",
    img: "/ceramics.jpg",
  },
  {
    href: "/made-in-italy",
    title: "Leather Bag",
    img: "/leather-bag.jpg",
  },
  {
    href: "/discover",
    title: "Aroma Diffuser",
    img: "/diffuser.jpg",
  },
  {
    href: "/discover",
    title: "Mini Projector",
    img: "/projector.jpg",
  },
  {
    href: "/discover",
    title: "Cozy Throw (Promo)",
    img: "/throw.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Live the Coastal Lifestyle
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Smart and stylish essentials curated from global marketplaces.
        </p>
      </section>

      {/* Grid prodotti (uniforme, minimal) */}
      <section aria-label="Featured">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={it.title === "Linen Shirt"} // una sola prioritaria
                />
              </div>
              <h3 className="mt-3 text-center text-[15px] font-medium text-gray-800">
                {it.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
