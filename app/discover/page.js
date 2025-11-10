export default function DiscoverPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Discover</h2>
      <p className="text-gray-600 max-w-2xl">
        Selezione curata di pezzi minimal, palette morbide e comfort intelligente.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border bg-white/70 p-4 hover:shadow-md transition">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sky-100 to-white mb-3" />
            <div className="flex items-center justify-between">
              <span className="font-medium">Item #{i + 1}</span>
              <a href="#" className="text-sm text-sky-700 hover:underline">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
