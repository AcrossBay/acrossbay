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
        {/* 🎄 SEZIONE NATALIZIA 2025 */}
<section className="py-20 bg-teal-50 text-gray-800">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
      🎁 Holiday Trends 2025
    </h2>
    <p className="text-lg text-gray-600 mb-10 max-w-2xl">
      È tempo di regali intelligenti e design con carattere. AcrossBay seleziona 
      i migliori oggetti tech e lifestyle dal mondo, perfetti per stupire senza complicazioni.
      Tutti i link portano ai marketplace originali con offerte verificate.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Mini proiettore tascabile – Edizione Natale",
          desc: "Per film e luci soffuse nelle serate festive.",
          price: "£69–£119",
          link: "#",
        },
        {
          title: "Lampada Nordic ricaricabile",
          desc: "Luce calda, minimal, perfetta come regalo elegante.",
          price: "£24–£49",
          link: "#",
        },
        {
          title: "Aroma diffuser smart",
          desc: "Design compatto, profumi d’ambiente controllabili via app.",
          price: "£19–£32",
          link: "#",
        },
        {
          title: "Organizer da scrivania in bambù",
          desc: "Ordine e stile per chi lavora da casa.",
          price: "£14–£25",
          link: "#",
        },
        {
          title: "Set candele artigianali europee",
          desc: "Scelte da piccoli laboratori indipendenti in Francia e Scandinavia.",
          price: "£18–£35",
          link: "#",
        },
        {
          title: "Auricolari wireless in custodia di legno",
          desc: "Audio premium e design naturale.",
          price: "£39–£79",
          link: "#",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-2">{item.desc}</p>
          <p className="font-semibold text-teal-700 mb-3">{item.price}</p>
          <a
            href={item.link}
            target="_blank"
            className="text-sm text-white bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700"
          >
            Scopri ora
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

    </section>
  );
}
