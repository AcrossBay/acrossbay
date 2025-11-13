import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-6 md:space-y-8">
      {/* Hero compatto su mobile */}
      <div className="rounded-2xl bg-gray-50 p-5 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">AcrossBay</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          Trend 2025: tech-lifestyle minimal e accessibili. Curiamo i migliori prodotti da Amazon, eBay e TikTok,
          con un tocco mediterraneo “Tuscany”.
        </p>
      </div>

      {/* Griglia responsive con card uniformi */}
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
        <p className="text-xs md:text-sm text-gray-500">Scopri la selezione {title} →</p>
      </div>
    </Link>
  );
}
