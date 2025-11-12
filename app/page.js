import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-gray-50 p-8">
        <h1 className="text-4xl font-bold mb-3">AcrossBay</h1>
        <p className="text-gray-600 max-w-2xl">
          Trend 2025: tech-lifestyle minimal e accessibili. Curiamo i migliori prodotti da Amazon, eBay e TikTok,
          con un tocco mediterraneo “Tuscany”.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card title="Amazon" href="/amazon" img="/images/projector-mini.webp" />
        <Card title="eBay" href="/ebay" img="/images/retro-console.webp" />
        <Card title="TikTok" href="/tiktok" img="/images/led-strip.webp" />
        <Card title="Tuscany" href="/tuscany" img="/images/linen-shirt.webp" />
      </div>
    </section>
  );
}

function Card({ title, href, img }) {
  return (
    <Link href={href} className="block border rounded-2xl overflow-hidden hover:shadow">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Scopri la selezione {title} →</p>
      </div>
    </Link>
  );
}
