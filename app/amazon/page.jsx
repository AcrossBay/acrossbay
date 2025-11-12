export default function Page() {
  return (
    <main className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Amazon Finds · AcrossBay</h1>
      <p className="mb-8 text-gray-600">
        Scopri una selezione di prodotti tech e lifestyle con spedizione rapida e recensioni reali.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/lamp-smart.webp" alt="Smart Lamp" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Smart Lamp Minimal</h2>
          <p className="text-sm mb-3">Illuminazione intelligente con controllo touch e design scandinavo.</p>
          <a href="#" className="text-teal-600 font-semibold">View on Amazon →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/projector-mini.webp" alt="Mini Projector" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Mini Projector 1080p</h2>
          <p className="text-sm mb-3">Compatto, silenzioso e perfetto per home cinema e viaggi.</p>
          <a href="#" className="text-teal-600 font-semibold">View on Amazon →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/desk-organizer.webp" alt="Desk Organizer" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Desk Organizer Set</h2>
          <p className="text-sm mb-3">Ordine e stile per la tua scrivania con finitura sabbia chiara.</p>
          <a href="#" className="text-teal-600 font-semibold">View on Amazon →</a>
        </div>
      </div>
    </main>
  );
}
