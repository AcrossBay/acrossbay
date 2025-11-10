import Image from "next/image";

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
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
      badge: "New",
    },
    {
      title: "Rechargeable Nordic Lamp",
      desc: "Minimal and warm — a refined gift for any home.",
      price: "£24–£49",
      link: "#",
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
      badge: "Best seller",
    },
    {
      title: "Smart Aroma Diffuser",
      desc: "Compact design, controllable via mobile app.",
      price: "£19–£32",
      link: "#",
      img: "https://images.unsplash.com/photo-1556228453-efd1ff7b3b54?q=80&w=1600&auto=format&fit=crop",
      badge: "New",
    },
    {
      title: "Bamboo Desk Organizer",
      desc: "Bring order and style to any workspace.",
      price: "£14–£25",
      link: "#",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
      badge: "Trending",
    },
    {
      title: "European Handcrafted Candle Set",
      desc: "Selected from small ateliers in France and Scandinavia.",
      price: "£18–£35",
      link: "#",
      img: "https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?q=80&w=1600&auto=format&fit=crop",
      badge: "Gift pick",
    },
    {
      title: "Wooden Wireless Earbuds",
      desc: "Premium sound with natural aesthetics.",
      price: "£39–£79",
      link: "#",
      img: "https://images.unsplash.com/photo-1518449073235-22463c4b1ee2?q=80&w=1600&auto=format&fit=crop",
      badge: "Editor’s pick",
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

      {/* Filter Bar */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap gap-3">
        {["All", "Under £50", "Smart Tech", "Home & Living", "Accessories"].map((f, i) => (
          <button
            key={i}
            className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-teal-600 hover:text-white transition"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Holiday Trends */}
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
              <article
                key={i}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition transform"
              >
                <div className="relative mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={960}
                    height={720}
                    className="w-full h-48 object-cover rounded-xl"
                    priority={i < 2}
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 text-xs font-semibold bg-teal-600 text-white px-2 py-1 rounded-md">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-1 mb-2">{item.desc}</p>
                <p className="font-semibold text-teal-700 mb-3">{item.price}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title}`}
                  className="inline-flex items-center justify-center text-sm text-white bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700"
                >
                  View item
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
