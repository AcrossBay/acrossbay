export const metadata = {
  title: "Discover | AcrossBay",
  description: "Curated lifestyle & tech finds from verified marketplaces.",
};

export default function DiscoverPage() {
  const holiday = [
    {
      title: "Pocket Projector — Holiday Edition",
      desc: "Perfect for cozy movie nights and festive vibes.",
      price: "£69–£119",
      link: "#",
    },
    {
      title: "Rechargeable Nordic Lamp",
      desc: "Minimal and warm — a refined gift for any home.",
      price: "£24–£49",
      link: "#",
    },
    {
      title: "Smart Aroma Diffuser",
      desc: "Compact design, controllable via mobile app.",
      price: "£19–£32",
      link: "#",
    },
    {
      title: "Bamboo Desk Organizer",
      desc: "Bring order and style to any workspace.",
      price: "£14–£25",
      link: "#",
    },
    {
      title: "European Handcrafted Candle Set",
      desc: "Selected from small ateliers in France and Scandinavia.",
      price: "£18–£35",
      link: "#",
    },
    {
      title: "Wooden Wireless Earbuds",
      desc: "Premium sound with natural aesthetics.",
      price: "£39–£79",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">Discover</h1>
        <p className="text-gray-600 max-w-2xl mt-2">
          Curated picks for simple, stylish living. Coastal vibe, everyday use.
          Quick choices, zero noise.
        </p>
      </header>

      {/* 🎄 Holiday Trends 2025 */}
      <section className="py-14 bg-teal-50/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            🎁 Holiday Trends 2025
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            It’s the season for smart gifts and stylish living. AcrossBay curates
            the best tech and lifestyle products from around the world — all links
            go to verified marketplace listings.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {holiday.map((item, i) => (
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
                  className="inline-block text-sm text-white bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700"
                >
                  View item
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
