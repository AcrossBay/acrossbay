import Link from "next/link";

function Item({ title, desc, tag }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="rounded-full border px-2 py-1 text-xs text-gray-600">
          {tag}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4">
        <button className="rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white">
          Richiedi dettagli
        </button>
      </div>
    </div>
  );
}

export default function SelectionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Selezione
        </h1>
        <p className="mt-5 text-base text-gray-600 md:text-lg">
          Pochi elementi, scelti e spiegati. Qui pubblichiamo solo ciò che ha senso:
          qualità, uso chiaro, e un motivo per esistere.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Item
          title="Recupero & cura personale"
          desc="Strumenti e accessori che aiutano davvero, con indicazioni d’uso chiare."
          tag="Wellness"
        />
        <Item
          title="Grounding & decompressione"
          desc="Oggetti di presenza: materiali, gesto lento, qualità percepibile."
          tag="Mindful"
        />
        <Item
          title="Linea erboristica selezionata"
          desc="Sezione dedicata: filiera, logica, uso consapevole. Niente promesse."
          tag="Herbal"
        />
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-600">
          Vuoi proporre un prodotto o chiedere info?
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-block rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:border-gray-400"
        >
          Contattaci
        </Link>
      </div>
    </div>
  );
}
