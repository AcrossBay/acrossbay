import Link from "next/link";

function CardIcon({ type }) {
  if (type === "recovery") {
    return (
      <svg viewBox="0 0 120 80" className="h-full w-full">
        <rect x="0" y="0" width="120" height="80" rx="14" fill="#F3F4F6" />
        <path
          d="M28 46c16-16 48-16 64 0"
          stroke="#111827"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M34 52c13-12 39-12 52 0"
          stroke="#6B7280"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="60" cy="40" r="6" fill="#111827" />
      </svg>
    );
  }
  if (type === "grounding") {
    return (
      <svg viewBox="0 0 120 80" className="h-full w-full">
        <rect x="0" y="0" width="120" height="80" rx="14" fill="#F3F4F6" />
        <ellipse cx="60" cy="44" rx="34" ry="18" fill="#111827" opacity="0.15" />
        <path d="M38 44c8-14 36-14 44 0" fill="#111827" opacity="0.25" />
        <path d="M44 44c6-10 26-10 32 0" fill="#111827" opacity="0.35" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 80" className="h-full w-full">
      <rect x="0" y="0" width="120" height="80" rx="14" fill="#F3F4F6" />
      <rect x="38" y="18" width="18" height="44" rx="6" fill="#111827" opacity="0.25" />
      <rect x="64" y="18" width="18" height="44" rx="6" fill="#111827" opacity="0.25" />
      <rect x="40" y="26" width="14" height="10" rx="3" fill="#111827" opacity="0.35" />
      <rect x="66" y="26" width="14" height="10" rx="3" fill="#111827" opacity="0.35" />
      <path d="M90 50c-6 0-10-4-10-10 6 0 10 4 10 10Z" fill="#111827" opacity="0.25" />
      <path d="M86 56c-8 0-14-6-14-14 8 0 14 6 14 14Z" fill="#111827" opacity="0.2" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Strumenti e prodotti che richiedono conoscenza, non acquisto impulsivo.
        </h1>

        <p className="mt-5 text-base text-gray-600 md:text-lg">
          AcrossBay seleziona prodotti di alta qualità legati al benessere, alla cura personale e
          alla vita quotidiana. Pochi elementi, scelti e spiegati.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/health"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-black"
          >
            Scopri la selezione
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:border-gray-400"
          >
            Approccio
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Link href="/health" className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow">
          <div className="h-32 overflow-hidden rounded-xl">
            <CardIcon type="recovery" />
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold">Recupero & cura personale</h3>
            <p className="mt-2 text-sm text-gray-600">Strumenti seri, spiegati bene. Non gadget.</p>
          </div>
        </Link>

        <Link href="/health" className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow">
          <div className="h-32 overflow-hidden rounded-xl">
            <CardIcon type="grounding" />
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold">Grounding & decompressione</h3>
            <p className="mt-2 text-sm text-gray-600">Oggetti di presenza: gesto lento, materiali, senso.</p>
          </div>
        </Link>

        <Link href="/herbal-bay" className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow">
          <div className="h-32 overflow-hidden rounded-xl">
            <CardIcon type="herbal" />
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold">Linee erboristiche selezionate</h3>
            <p className="mt-2 text-sm text-gray-600">Filiera, logica, uso consapevole. Zero “miracoli”.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
