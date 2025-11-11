export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Live the Coastal Lifestyle
    {/* ——— Promo: Smart Made in Italy ——— */}
<section className="py-14">
  <div className="max-w-5xl mx-auto rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100">
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-teal-700 mb-2">🇮🇹 Made in Italy</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Smart Made in Italy — limited drops, timeless essentials
        </h2>
        <p className="mt-3 text-slate-600">
          Italian craftsmanship meets everyday simplicity: clean design, relaxed fit, verified marketplaces.
        </p>

        {/* badges opzionali */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-white/70 border border-teal-200">Verified sellers</span>
          <span className="px-2.5 py-1 rounded-full bg-white/70 border border-teal-200">Limited drops</span>
          <span className="px-2.5 py-1 rounded-full bg-white/70 border border-teal-200">EU shipping</span>
        </div>
      </div>

      <a
        href="/made-in-italy"
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 font-medium border border-teal-300 text-teal-800 hover:bg-teal-50 transition"
      >
        Explore Made in Italy
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 6.414V16a1 1 0 11-2 0V6.414L5.707 9.707A1 1 0 114.293 8.293l5-5z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
</section>
{/* ——— /Promo: Smart Made in Italy ——— */}

        </h1>
        <p className="text-gray-600">
          Discover smart and stylish finds from trusted marketplaces worldwide.
        </p>
      </section>

      {/* 🎄 Holiday Picks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            🎁 Holiday Picks 2025
          </h2>
          <p className="text-gray-600 mb-10">
            Discover the season’s most-loved lifestyle and tech gifts — selected from trusted marketplaces worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1607083206863-3e3d6c3e8e3f?w=400"
                alt="Mini Projector"
                className="rounded-xl mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                Smart Mini Projector
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Compact, stylish, perfect for cozy movie nights.
              </p>
              <a
                href="#"
                className="text-teal-600 font-medium hover:underline"
              >
                View item →
              </a>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1616628188502-5fef0f3a43da?w=400"
                alt="Nordic Lamp"
                className="rounded-xl mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                Nordic Rechargeable Lamp
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Minimal design, soft light — ideal as a winter gift.
              </p>
              <a
                href="#"
                className="text-teal-600 font-medium hover:underline"
              >
                View item →
              </a>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1606813902789-45e1bbeb8c16?w=400"
                alt="Aroma Diffuser"
                className="rounded-xl mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                Smart Aroma Diffuser
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Control fragrances from your phone — modern and relaxing.
              </p>
              <a
                href="#"
                className="text-teal-600 font-medium hover:underline"
              >
                View item →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
