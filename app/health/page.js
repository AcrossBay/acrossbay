export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20 px-6">
      <h1 className="text-4xl font-bold text-teal-800 mb-4">
        Live the Coastal Lifestyle
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        AcrossBay unisce stile, semplicità e funzionalità. Scopri prodotti essenziali ispirati al mare e alla vita quotidiana, con un design intelligente e pulito.
      </p>
      <a
        href="/discover"
        className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition"
      >
        Esplora la Collezione
      </a>
    </section>
  );
}
