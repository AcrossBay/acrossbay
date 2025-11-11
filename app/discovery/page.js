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
