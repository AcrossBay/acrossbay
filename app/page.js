export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="card p-8 md:p-10">
        <h1>Live the Coastal Lifestyle</h1>
        <p className="mt-4 max-w-2xl">
          Essenziali puliti, materiali comodi, ispirazione da mare e vento.
          AcrossBay unisce minimal design e vibe mediterranea.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="/discover" className="no-underline">
            <span className="inline-flex items-center rounded-full px-4 py-2 bg-slate-900 text-white hover:opacity-90">
              Explore Collections
            </span>
          </a>
          <a href="/about" className="no-underline">
            <span className="inline-flex items-center rounded-full px-4 py-2 bg-white ring-1 ring-slate-300 hover:bg-slate-50">
              Our Story
            </span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3>Capsule</h3>
          <p className="mt-2">Palette morbide, tessuti naturali, easy layering.</p>
        </div>
        <div className="card p-6">
          <h3>Journal</h3>
          <p className="mt-2">Storie brevi di viaggi, surf spots e design semplice.</p>
        </div>
        <div className="card p-6">
          <h3>Newsletter</h3>
          <p className="mt-2">Una mail al mese. Niente spam.</p>
        </div>
      </div>
    </section>
  );
}
