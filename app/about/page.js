export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          About AcrossBay
        </h1>

        <p className="mt-6 text-base text-gray-600 md:text-lg">
          AcrossBay non è un marketplace. È una selezione curata: pochi prodotti, scelti per qualità,
          utilità reale e coerenza. Qui non puntiamo sull’acquisto impulsivo.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Selezione</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pochi elementi. Ogni scelta deve avere un perché (materiali, funzione, affidabilità).
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Contesto</h3>
            <p className="mt-2 text-sm text-gray-600">
              Spieghiamo a cosa serve, per chi è, e cosa aspettarsi. Niente “miracoli”.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Semplicità</h3>
            <p className="mt-2 text-sm text-gray-600">
              Una vetrina chiara: pochi blocchi, poche scelte, percorso semplice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
