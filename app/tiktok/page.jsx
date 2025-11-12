export default function Page() {
  return (
    <main className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">TikTok Trends · AcrossBay</h1>
      <p className="mb-8 text-gray-600">
        I gadget virali più popolari su TikTok: smart, utili e con un tocco divertente.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/makeup-light.webp" alt="Makeup Light" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Ring Light Portable</h2>
          <p className="text-sm mb-3">Illuminazione perfetta per video e selfie in ogni ambiente.</p>
          <a href="#" className="text-teal-600 font-semibold">View on TikTok →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/mini-fan.webp" alt="Mini Fan" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Mini Fan Wireless</h2>
          <p className="text-sm mb-3">Compatto e ricaricabile, ideale per giornate calde e viaggi.</p>
          <a href="#" className="text-teal-600 font-semibold">View on TikTok →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/led-strip.webp" alt="LED Strip" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">LED Strip RGB</h2>
          <p className="text-sm mb-3">Atmosfera colorata per ogni stanza con controllo remoto.</p>
          <a href="#" className="text-teal-600 font-semibold">View on TikTok →</a>
        </div>
      </div>
    </main>
  );
}
