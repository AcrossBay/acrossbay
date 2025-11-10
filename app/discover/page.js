export default function DiscoverPage() {
  const items = [
    { title: "Linen Tee", tag: "Light & Breathable", price: "£29", href: "#" },
    { title: "Coastal Hoodie", tag: "Salt-Ready", price: "£59", href: "#" },
    { title: "Harbor Shorts", tag: "Easy Comfort", price: "£39", href: "#" },
    { title: "Canvas Tote", tag: "Daily Carry", price: "£25", href: "#" },
    { title: "Slip-On Sneakers", tag: "Walk & Wander", price: "£49", href: "#" },
    { title: "Sunset Cap", tag: "Shade & Style", price: "£19", href: "#" },
    { title: "Weekend Duffel", tag: "Travel Light", price: "£79", href: "#" },
    { title: "Bamboo Socks (3x)", tag: "Soft Touch", price: "£12", href: "#" },
  ];

  return (
    <section className="space-y-8">
      {/* Intro */}
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Discover</h1>
        <p className="text-slate-600 max-w-2xl">
          Selezione curata di pezzi minimal e funzionali. Vibe costiera, uso quotidiano.
          Scelte rapide, zero rumore.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <article key={it.title} className="rounded-2xl bg-white/80 ring-1 ring-slate-200 hover:ring-slate-300 transition p-5">
            {/* Image placeholder */}
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sky-100 to-white mb-4" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">{it.title}</h3>
                <p className="text-sm text-slate-500">{it.tag}</p>
              </div>
              <span className="text-sm font-semibold">{it.price}</span>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href={it.href}
                className="inline-flex items-center rounded-full px-4 py-2 bg-slate-900 text-white text-sm hover:opacity-90"
              >
                View on eBay
              </a>
              <a
                href={it.href}
                className="inline-flex items-center rounded-full px-4 py-2 ring-1 ring-slate-300 text-sm hover:bg-slate-50"
              >
                Amazon
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Note futura (filtri) */}
      <div className="text-xs text-slate-500">
        Coming soon: filtri per categoria, prezzo, materiali.
      </div>
    </section>
  );
}
