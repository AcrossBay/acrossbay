import PromoBanner from "./components/PromoBanner";
import SmallCard from "./components/SmallCard";

export const metadata = {
  title: "AcrossBay — Smart lifestyle, minimal design",
  description:
    "Selezioni smart e minimal da marketplace affidabili. Regali e oggetti utili con stile.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      {/* HERO */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Live the Coastal Lifestyle
        </h1>
        <p className="text-gray-600 mt-2">
          Smart and stylish essentials curated from global marketplaces.
        </p>
      </section>

      {/* PROMO STAGIONALE (minimal) */}
      <PromoBanner />

      {/* GRID PICCOLA: Made in Italy (ridotta e coerente) */}
      <section className="my-8">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-lg font-semibold">Made in Italy</h2>
          <a
            href="/made-in-italy"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Vedi tutto →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SmallCard
            title="Linen Shirt"
            href="/made-in-italy"
            img="/linen-shirt.jpg"     // se non c'è, la card resta sobria
            caption="Lino italiano, fit rilassato"
          />
          <SmallCard
            title="Ceramics"
            href="/made-in-italy"
            img="/ceramics.jpg"
            caption="Ceramiche artigianali"
          />
          <SmallCard
            title="Leather Bag"
            href="/made-in-italy"
            img="/leather-bag.jpg"
            caption="Pelle pieno fiore"
          />
        </div>
      </section>

      {/* GRID PICCOLA: Holiday Picks (altra vetrina con card più piccole) */}
      <section className="my-8">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-lg font-semibold">Holiday Picks</h2>
          <a
            href="/discover"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Scopri di più →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SmallCard
            title="Smart Mini Projector"
            href="/discover"
            img="/projector.jpg"
            caption="Movie nights a casa"
          />
          <SmallCard
            title="Aroma Diffuser"
            href="/discover"
            img="/diffuser.jpg"
            caption="Relax, luce soffusa"
          />
          <SmallCard
            title="Warm Throw"
            href="/discover"
            img="/throw.jpg"
            caption="Morbido e minimal"
          />
        </div>
      </section>
    </main>
  );
}
