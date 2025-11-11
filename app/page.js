import Link from "next/link";

export const metadata = {
  title: "AcrossBay — Smart Lifestyle",
  description: "Discover and compare unique finds from trusted marketplaces worldwide.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-semibold text-slate-800 mb-3">
          Live the Coastal Lifestyle
        </h1>
        <p className="text-gray-600">
          Smart and stylish essentials curated from global marketplaces.
        </p>
      </section>

      {/* Smart Made in Italy */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto rounded-2xl p-6 bg-teal-50 border border-teal-100">
          <p className="text-xs uppercase tracking-wide text-teal-700 mb-2">
            Made in Italy
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Smart Made in Italy — limited drops, timeless essentials
          </h2>
          <p className="text-gray-600 text-sm">
            Italian craftsmanship meets everyday simplicity: clean design, relaxed fit,
            verified marketplaces.
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

      {/* Discover section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-800 text-center mb-8">
            Discover Marketplace Finds
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1682708263623-bd6c3e8f3bf4?q=80&w=800&auto=format&fit=crop"
                alt="Mini Projector"
                className="rounded-xl mb-3"
              />
              <h3 className="font-semibold">Smart Mini Projector</h3>
              <p className="text-gray-600 text-sm mt-1">
                Compact and stylish, perfect for cozy movie nights.
              </p>
            </div>
            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop"
                alt="Nordic Lamp"
                className="rounded-xl mb-3"
              />
              <h3 className="font-semibold">Nordic Lamp</h3>
              <p className="text-gray-600 text-sm mt-1">
                Warm ambient lighting with a minimal design.
              </p>
            </div>
            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop"
                alt="Diffuser"
                className="rounded-xl mb-3"
              />
              <h3 className="font-semibold">Smart Aroma Diffuser</h3>
              <p className="text-gray-600 text-sm mt-1">
                Calm your space with a fine, refreshing mist.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
