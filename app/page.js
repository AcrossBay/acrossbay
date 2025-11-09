export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="text-center py-20 rounded-3xl bg-gradient-to-r from-sky-100 to-teal-50 border">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Live the Coastal Lifestyle
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Essentials puliti, materiali comodi, ispirazione da mare e vento. AcrossBay unisce minimal design e vibe mediterranea.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="/discover" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white">Shop the drop</a>
          <a href="/about" className="px-5 py-2.5 rounded-lg border">Our story</a>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="font-medium">Tide Capsule</h3>
            <p className="mt-2 text-sm text-slate-600">Colori sabbia e oceano, linee pulite.</p>
            <a href="/discover" className="mt-4 inline-block text-blue-600">Scopri →</a>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="font-medium">Breeze Essentials</h3>
            <p className="mt-2 text-sm text-slate-600">Tessuti leggeri, tagli comodi.</p>
            <a href="/discover" className="mt-4 inline-block text-blue-600">Scopri →</a>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="font-medium">Harbor Edit</h3>
            <p className="mt-2 text-sm text-slate-600">Dettagli nautici, palette soft.</p>
            <a href="/discover" className="mt-4 inline-block text-blue-600">Scopri →</a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="rounded-xl border p-6 bg-white">
        <h2 className="text-xl font-semibold">Newsletter</h2>
        <p className="mt-2 text-slate-600">Un’email al mese. Niente spam.</p>
        <form className="mt-4 flex gap-3">
          <input type="email" placeholder="La tua email" className="flex-1 rounded-md border px-3 py-2" />
          <button className="rounded-md bg-blue-600 text-white px-4 py-2">Iscriviti</button>
        </form>
      </section>
    </div>
  );
}
