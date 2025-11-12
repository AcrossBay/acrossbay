export default function Page() {
  return (
    <main className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Tuscany · AcrossBay</h1>
      <p className="mb-8 text-gray-600">
        Ispirazione mediterranea e prodotti Made in Italy: stile naturale e materiali autentici.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/linen-shirt.webp" alt="Linen Shirt" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Linen Shirt Toscana</h2>
          <p className="text-sm mb-3">Camicia in lino italiano, fresca e leggera per ogni stagione.</p>
          <a href="#" className="text-teal-600 font-semibold">View Product →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/terracotta-vase.webp" alt="Terracotta Vase" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Terracotta Vase</h2>
          <p className="text-sm mb-3">Artigianato toscano autentico con smaltatura sabbia naturale.</p>
          <a href="#" className="text-teal-600 font-semibold">View Product →</a>
        </div>

        <div className="border rounded-2xl p-4 shadow-sm">
          <img src="/images/leather-bag.webp" alt="Leather Bag" className="rounded-xl mb-3" />
          <h2 className="font-semibold text-lg mb-1">Leather Bag Firenze</h2>
          <p className="text-sm mb-3">Borsa in pelle conciata al vegetale, interamente Made in Italy.</p>
          <a href="#" className="text-teal-600 font-semibold">View Product →</a>
        </div>
      </div>
    </main>
  );
}
