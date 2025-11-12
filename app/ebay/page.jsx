export default function Page() {
  return (
    <main className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">eBay Finds · AcrossBay</h1>
      <p className="mb-8 text-gray-600">
        Occasioni autentiche e selezioni vintage dal marketplace più dinamico del web.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/headphones-vintage.webp" alt="Vintage Headphones" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Cuffie Vintage 80s</h2>
          <p className="text-sm mb-3">Design retrò con driver moderni, perfette per audiofili.</p>
          <a href="#" className="text-teal-600 font-semibold">View on eBay →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/watch-classic.webp" alt="Classic Watch" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Orologio Classic Quartz</h2>
          <p className="text-sm mb-3">Eleganza minimal per ogni occasione, cinturino in pelle italiana.</p>
          <a href="#" className="text-teal-600 font-semibold">View on eBay →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/retro-console.webp" alt="Retro Console" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Retro Console Portable</h2>
          <p className="text-sm mb-3">Oltre 400 giochi classici in un dispositivo tascabile.</p>
          <a href="#" className="text-teal-600 font-semibold">View on eBay →</a>
        </div>
      </div>
    </main>
  );
}
