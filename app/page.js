import Section from "./components/Section";
import ProductCard from "./components/ProductCard";

export const metadata = {
  title: "AcrossBay — Coastal Lifestyle",
  description: "Smart and stylish essentials curated from global marketplaces.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO compatto e coerente */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
            Live the Coastal Lifestyle
          </h1>
          <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
            Smart and stylish essentials curated from global marketplaces.
          </p>
        </div>
      </section>

      {/* “Made in Italy” trasformato in card uniforme */}
      <Section title="Made in Italy" subtitle="Limited drops, timeless essentials">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            imageSrc="/images/madeinitaly.jpg"   /* puoi cambiare immagine */
            imageAlt="Made in Italy"
            title="Smart Made in Italy"
            subtitle="Italian craftsmanship meets everyday simplicity: clean design, relaxed fit, verified marketplaces."
            href="/made-in-italy"
          />
          {/* Se vuoi altre due card teaser per armonizzare la griglia */}
          <ProductCard
            imageSrc="/images/linen-shirt.jpg"
            imageAlt="Linen Shirt"
            title="Linen Shirt"
            subtitle="Breathable, minimal, coastal look."
            href="/made-in-italy"
          />
          <ProductCard
            imageSrc="/images/ceramics.jpg"
            imageAlt="Ceramics"
            title="Mediterranean Ceramics"
            subtitle="Warm textures for smart homes."
            href="/made-in-italy"
          />
        </div>
      </Section>

      {/* Discover uniforme con la stessa griglia e card */}
      <Section title="Discover Marketplace Finds" subtitle="Curated picks from Amazon, eBay and TikTok">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            imageSrc="/images/projector.jpg"
            imageAlt="Mini Projector"
            title="Smart Mini Projector"
            subtitle="Compact and stylish, perfect for cozy movie nights."
            href="/discover"
          />
          <ProductCard
            imageSrc="/images/diffuser.jpg"
            imageAlt="Aroma Diffuser"
            title="Smart Aroma Diffuser"
            subtitle="Calm your space with a fine, refreshing mist."
            href="/discover"
          />
          <ProductCard
            imageSrc="/images/organizer.jpg"
            imageAlt="Desk Organizer"
            title="Magnetic Desk Organizer"
            subtitle="Minimal workspace, maximum focus."
            href="/discover"
          />
        </div>
      </Section>
    </main>
  );
}
