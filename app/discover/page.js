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
             {/* Gift Ideas Section */}
<section className="py-14 bg-white border-t border-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
      🎄 Gift Ideas 2025
    </h2>
    <p className="text-lg text-gray-600 mb-10 max-w-2xl">
      Handpicked inspirations for thoughtful giving. From smart mini gadgets to cozy home accents — all selected from trusted marketplaces worldwide.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Smart Mug Warmer",
          desc: "Keep your coffee at the perfect temperature all morning.",
          price: "£22–£34",
          link: "#",
          img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
          badge: "Popular",
        },
        {
          title: "Handwoven Blanket",
          desc: "Made in Portugal with organic cotton and neutral tones.",
          price: "£45–£75",
          link: "#",
          img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop",
          badge: "Cozy pick",
        },
        {
          title: "Mini Bluetooth Speaker",
          desc: "Small, elegant and powerful — ideal for travel or gifting.",
          price: "£18–£29",
          link: "#",
          img: "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=1600&auto=format&fit=crop",
          badge: "Gift pick",
        },
      ].map((item, i) => (
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
              <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600 text-white px-2 py-1 rounded-md">
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
 {/* Smart Made in Italy Section */}
<section className="py-14 bg-white border-t border-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
      🇮🇹 Smart Made in Italy
    </h2>
    <p className="text-lg text-gray-600 mb-10 max-w-2xl">
      Italian craftsmanship meets everyday simplicity — clean design, relaxed fit, timeless essentials.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Coastal Cotton Tee",
          desc: "Minimal Italian cut, crafted in soft organic cotton. Designed for the British everyday style.",
          price: "£29–£39",
          link: "#",
          img: "https://images.unsplash.com/photo-1593032465171-8b0638e4d76b?q=80&w=1600&auto=format&fit=crop",
          badge: "Limited Drop",
        },
        {
          title: "Studio Overshirt",
          desc: "Boxy fit overshirt in washed sage — the perfect mix of structure and comfort.",
          price: "£49–£59",
          link: "#",
          img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1600&auto=format&fit=crop",
          badge: "New Arrival",
        },
        {
          title: "Soft Linen Cap",
          desc: "Relaxed fit, sand tone, crafted in Tuscany. Ideal for a clean, smart-casual look.",
          price: "£25–£35",
          link: "#",
          img: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1600&auto=format&fit=crop",
          badge: "Made in Italy",
        },
      ].map((item, i) => (
        <article
          key={i}
          className="bg-white p-5 rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition transform"
        >
          <div className="relative mb-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            {item.badge && (
              <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600 text-white px-2 py-1 rounded-md">
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
{/* Cozy Home Tech */}
<section className="py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-semibold mb-2">Cozy Home Tech</h2>
    <p className="text-lg text-gray-600 mb-8">
      Small smart upgrades for calm evenings — ambient light, warm coffee, gentle sound.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Card */}
      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=640&auto=format&fit=crop"
          alt="Smart Mug Warmer"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Smart Mug Warmer</h3>
        <p className="text-sm text-gray-600 mb-3">
          Keeps your coffee at the perfect temp all morning.
        </p>
        <p className="text-sm text-gray-500 mb-4">£19–£29</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on eBay</a>
        </div>
      </article>

      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1603481549445-42b4b6c6c1a2?q=80&w=640&auto=format&fit=crop"
          alt="Ambient LED Lamp"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Ambient LED Lamp</h3>
        <p className="text-sm text-gray-600 mb-3">
          Minimal mood light with soft dimmer — bedside or desk.
        </p>
        <p className="text-sm text-gray-500 mb-4">£24–£45</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on TikTok</a>
        </div>
      </article>

      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1520975619010-6a4b98cd3a25?q=80&w=640&auto=format&fit=crop"
          alt="Mini Bluetooth Speaker"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Mini Bluetooth Speaker</h3>
        <p className="text-sm text-gray-600 mb-3">
          Small, elegant, and powerful — perfect for relaxing playlists.
        </p>
        <p className="text-sm text-gray-500 mb-4">£19–£39</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on eBay</a>
        </div>
      </article>
    </div>
  </div>
</section>

{/* Travel Essentials */}
<section className="py-14 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-semibold mb-2">Travel Essentials</h2>
    <p className="text-lg text-gray-600 mb-8">
      Lightweight, practical picks for weekends away — compact and durable.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1520975764746-0f87bab7be24?q=80&w=640&auto=format&fit=crop"
          alt="Carry-On Organizer Set"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Carry-On Organizer Set</h3>
        <p className="text-sm text-gray-600 mb-3">
          Packing cubes that keep outfits clean and tidy.
        </p>
        <p className="text-sm text-gray-500 mb-4">£14–£29</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on eBay</a>
        </div>
      </article>

      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1535576434764-05f8a8a5b5a9?q=80&w=640&auto=format&fit=crop"
          alt="Compact Power Bank"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Compact Power Bank</h3>
        <p className="text-sm text-gray-600 mb-3">
          Slim design, fast charge — phone safe for a full day out.
        </p>
        <p className="text-sm text-gray-500 mb-4">£17–£35</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on TikTok</a>
        </div>
      </article>

      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1552321554-5fefe8b1c5d5?q=80&w=640&auto=format&fit=crop"
          alt="Water-Resistant Crossbody"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Water-Resistant Crossbody</h3>
        <p className="text-sm text-gray-600 mb-3">
          Secure minimal bag for city walks and flights.
        </p>
        <p className="text-sm text-gray-500 mb-4">£22–£49</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on eBay</a>
        </div>
      </article>
    </div>
  </div>
</section>

{/* Minimal Desk Setup */}
<section className="py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-semibold mb-2">Minimal Desk Setup</h2>
    <p className="text-lg text-gray-600 mb-8">
      Clean desk, clear mind — smart organizers and soft lighting for focus.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1587613865763-4b8b0a02f6f6?q=80&w=640&auto=format&fit=crop"
          alt="Bamboo Desk Organizer"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Bamboo Desk Organizer</h3>
        <p className="text-sm text-gray-600 mb-3">
          Slots for phone, pens and notes — tidy in seconds.
        </p>
        <p className="text-sm text-gray-500 mb-4">£16–£32</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on eBay</a>
        </div>
      </article>

      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=640&auto=format&fit=crop"
          alt="Low-Profile Headphones"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Low-Profile Headphones</h3>
        <p className="text-sm text-gray-600 mb-3">
          Neutral sound, comfy fit — music without distraction.
        </p>
        <p className="text-sm text-gray-500 mb-4">£29–£59</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on TikTok</a>
        </div>
      </article>

      <article className="rounded-2xl border p-4 shadow-sm bg-white">
        <img
          src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=640&auto=format&fit=crop"
          alt="Soft Desk Lamp"
          className="rounded-xl mb-4 mx-auto"
        />
        <h3 className="font-semibold text-gray-800">Soft Desk Lamp</h3>
        <p className="text-sm text-gray-600 mb-3">
          Eye-friendly light for evening sessions.
        </p>
        <p className="text-sm text-gray-500 mb-4">£21–£44</p>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on Amazon</a>
          <a href="#" className="inline-flex items-center rounded-full px-3 py-1 text-sm border hover:bg-gray-50">View on eBay</a>
        </div>
      </article>
    </div>
  </div>
</section>

    </main>
  );
}
