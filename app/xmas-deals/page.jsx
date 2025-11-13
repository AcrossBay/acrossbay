import Link from "next/link";

export default function Page() {
  const deals = [
    { t: "Mini Projector – Gift Pick", img: "/projector-mini.webp", href: "/amazon" },
    { t: "Retro Console – Xmas Fun",   img: "/retro-console.webp",  href: "/ebay" },
    { t: "LED Strip – Xmas Lights",    img: "/led-strip.webp",      href: "/tiktok" },
    { t: "Linen Shirt – Tuscany",      img: "/linen-shirt.webp",    href: "/tuscany" },
  ];

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="rounded-2xl bg-red-50 p-5 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Promo Natale 🎄</h1>
        <p className="text-gray-700 text-sm md:text-base">
          Idee regalo e offerte selezionate per le feste. Prodotti semplici, utili e “wow”.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {deals.map((c, i) => (
          <Link key={i} href={c.href} className="block border rounded-2xl overflow-hidden hover:shadow bg-white">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={c.img} alt={c.t} className="w-full h-full object-cover" />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="font-semibold text-sm md:text-base">{c.t}</h3>
              <p className="text-xs md:text-sm text-gray-500">Scopri →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
