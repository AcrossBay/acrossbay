export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Live the Coastal <span className="text-blue-600">Lifestyle</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Essentials puliti, materiali comodi, ispirazione da mare e vento.
              AcrossBay unisce minimal design e vibe mediterranea.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="/discover"
                className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700"
              >
                Explore Collections
              </a>
              <a
                href="/about"
                className="inline-block rounded-lg border border-gray-300 px-5 py-3 font-semibold hover:border-gray-400"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop"
              alt="Coastal lifestyle"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Collections</h3>
            <p className="mt-2 text-sm text-gray-600">
              Capsule stagionali leggere: colori sabbia, oceano, tramonto.
            </p>
            <a href="/discover" className="mt-4 inline-block text-blue-600 font-semibold">
              Shop the drop →
            </a>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Journal</h3>
            <p className="mt-2 text-sm text-gray-600">
              Storie brevi di viaggi, surf spots e design semplice.
            </p>
            <a href="/discover" className="mt-4 inline-block text-blue-600 font-semibold">
              Read more →
            </a>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-600">
              Una mail al mese: nuovi lanci e ispirazioni slow.
            </p>
            <a href="/contact" className="mt-4 inline-block text-blue-600 font-semibold">
              Stay in the loop →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
