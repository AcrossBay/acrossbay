export default function HomePage() {
  return (
    <section className="space-y-10">
      {/* HERO */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Live the Coastal Lifestyle
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Essenziali puliti, materiali comodi, ispirazione da mare e vento.
          AcrossBay unisce minimal design e vibe mediterranea.
        </p>

        <div className="flex gap-3">
          <a
            href="/discover"
            className="inline-flex items-center rounded-full px-5 py-2.5 bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition"
          >
            Explore Collections
          </a>
          <a
            href="/about"
            className="inline-flex items-center rounded-full px-5 py-2.5 border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* CARDS PREVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: "Linen Tee", tag: "Daily essential" },
          { title: "Coastal Hoodie", tag: "Salt & sun ready" },
          { title: "Harbor Shorts", tag: "Easy comfort" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-white/70 backdrop-blur p-5 hover:shadow-md transition"
          >
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 mb-4" />
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
