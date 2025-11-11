export default function PromoBanner() {
  return (
    <section className="my-8">
      <div className="rounded-2xl border bg-gradient-to-br from-gray-50 to-white p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="uppercase tracking-wide text-xs text-gray-500">Promo</p>
            <h3 className="text-2xl font-semibold">Natale Minimal</h3>
            <p className="text-sm text-gray-600 mt-1">
              Idee smart per regali semplici e belli. Spedizioni rapide dai marketplace.
            </p>
          </div>
          <a
            href="/discover"
            className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Scopri ora →
          </a>
        </div>
      </div>
    </section>
  );
}
