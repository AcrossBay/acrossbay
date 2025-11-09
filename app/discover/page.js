export default function DiscoverPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Discover</h1>
      <p className="text-slate-600">
        Una selezione veloce per testare il layout. Sostituiremo con prodotti veri.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["Linen Tee", "Coastal Hoodie", "Harbor Shorts", "Tide Cap", "Breeze Tote", "Shell Necklace"].map((name, i) => (
          <div key={i} className="rounded-xl border p-4 bg-white">
            <div className="aspect-[4/3] rounded-lg bg-slate-100 mb-3" />
            <div className="flex items-center justify-between">
              <span className="font-medium">{name}</span>
              <span className="text-sm text-slate-500">€49</span>
            </div>
            <a href="#" className="mt-2 inline-block text-blue-600">Dettagli →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
