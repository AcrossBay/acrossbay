export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20 px-6">
      <h1 className="text-4xl font-bold text-teal-800 mb-4">
        Live the Coastal Lifestyle
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        AcrossBay unisce stile e semplicità. Prodotti essenziali ispirati al mare
        e alla vita quotidiana, con un design pulito.
      </p>
      <a
        href="/discover"
        className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition"
      >
        Esplora la Collezione
      </a>
    </section>
  <section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
      🎁 Holiday Picks 2025
    </h2>
    <p className="text-gray-600 mb-10">
      Discover the season’s most-loved lifestyle and tech gifts — selected from trusted marketplaces worldwide.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <img src="https://images.unsplash.com/photo-1607083206863-3e3d6c3e8e3f?w=400" alt="Mini Projector" className="rounded-xl mb-4 mx-auto" />
        <h3 className="font-semibold text-lg text-gray-800">Smart Mini Projector</h3>
        <p className="text-gray-500 text-sm mb-3">Compact, stylish, perfect for cozy movie nights.</p>
        <a href="#" className="text-teal-600 font-medium hover:underline">View item →</a>
      </div>

      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <img src="https://images.unsplash.com/photo-1616628188502-5fef0f3a43da?w=400" alt="Nordic Lamp" className="rounded-xl mb-4 mx-auto" />
        <h3 className="font-semibold text-lg text-gray-800">Nordic Rechargeable Lamp</h3>
        <p className="text-gray-500 text-sm mb-3">Minimal design, soft light — ideal as a winter gift.</p>
        <a href="#" className="text-teal-600 font-medium hover:underline">View item →</a>
      </div>

      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <img src="https://images.unsplash.com/photo-1606813902789-45e1bbeb8c16?w=400" alt="Aroma Diffuser" className="rounded-xl mb-4 mx-auto" />
        <h3 className="font-semibold text-lg text-gray-800">Smart Aroma Diffuser</h3>
        <p className="text-gray-500 text-sm mb-3">Control fragrances from your phone — modern and relaxing.</p>
        <a href="#" className="text-teal-600 font-medium hover:underline">View item →</a>
      </div>
    </div>
  </div>
</section>

  );
}
