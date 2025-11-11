import Link from "next/link";

export const metadata = {
  title: "AcrossBay — Coastal Lifestyle",
  description: "Smart finds from trusted marketplaces worldwide",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-semibold text-slate-800 mb-4">
          Live the Coastal Lifestyle
        </h1>
        <p className="text-gray-600">
          Discover smart and stylish finds from trusted marketplaces worldwide.
        </p>
      </section>

      {/* Promo: Made in Italy (soft) */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto rounded-2xl p-5 lg:p-6 bg-teal-50/70 border border-teal-100">
          <p className="text-xs uppercase tracking-wide text-teal-700 mb-1.5">
            Made in Italy
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Smart Made in Italy — limited drops, timeless essentials
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Italian craftsmanship meets everyday simplicity: clean design, relaxed
            fit, verified marketplaces.
          </p>
          <div className="mt-4">
            <Link
              href="/made-in-italy"
              className="inline-flex items-center gap-1 text-teal-700 font-medium text-sm hover:underline"
            >
              Explore Made in Italy →
            </Link>
          </div>
        </div>
      </section>

      {/* Holiday Picks / Product grid demo */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-800 text-center mb-8">
            🎁 Holiday Picks 2025
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1682708263623-bd6c3e8f3bf4?q=80&w=800&auto=format&fit=crop"
                alt="Mini Projector"
                className="rounded-xl mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg">Smart Mini Projector</h3>
              <p className="text-gray-600 text-sm mt-1">
                Compact, stylish, perfect for cozy movie nights.
              </p>
              <div className="mt-3">
                <a
                  href="/discover"
                  className="text-teal-700 font-medium hover:underline"
                >
                  View item →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop"
                alt="Nordic Lamp"
                className="rounded-xl mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg">Nordic Rechargeable Lamp</h3>
              <p className="text-gray-600 text-sm mt-1">
                Warm ambient light with modern minimal style.
              </p>
              <div className="mt-3">
                <a
                  href="/discover"
                  className="text-teal-700 font-medium hover:underline"
                >
                  View item →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop"
                alt="Aroma Diffuser"
                className="rounded-xl mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg">Smart Aroma Diffuser</h3>
              <p className="text-gray-600 text-sm mt-1">
                Calm your space with ultra-fine mist.
              </p>
              <div className="mt-3">
                <a
                  href="/discover"
                  className="text-teal-700 font-medium hover:underline"
                >
                  View item →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
