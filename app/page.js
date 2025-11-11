import Section from "./components/Section";
import ProductCard from "./components/ProductCard";

export const metadata = {
  title: "AcrossBay | Live the Coastal Lifestyle",
  description:
    "Smart and stylish essentials curated from global marketplaces — clean, modern, minimal design inspired by the Mediterranean lifestyle.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900">
      {/* Hero Section */}
      <Section
        title="Live the Coastal Lifestyle"
        subtitle="Smart and stylish essentials curated from global marketplaces."
      >
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover timeless products, inspired by simplicity, functionality,
            and modern Italian style.
          </p>
        </div>
      </Section>

      {/* Made in Italy Section */}
      <Section title="Made in Italy">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <ProductCard
            imageSrc="/images/madeinitaly-1.jpg"
            imageAlt="Made in Italy products"
            title="Made in Italy"
            subtitle="Timeless quality and refined craftsmanship."
            href="/made-in-italy"
          />
          <ProductCard
            imageSrc="/images/madeinitaly-2.jpg"
            imageAlt="Italian linen shirt"
            title="Linen Shirt"
            subtitle="Essential summer comfort — breathable and natural."
            href="/made-in-italy"
          />
          <ProductCard
            imageSrc="/images/madeinitaly-3.jpg"
            imageAlt="Italian ceramics"
            title="Ceramics"
            subtitle="Elegant handmade design from Sicilian artisans."
            href="/made-in-italy"
          />
        </div>
      </Section>

      {/* Discover Section */}
      <Section title="Discover Marketplace Finds">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <ProductCard
            imageSrc="/images/projector.jpg"
            imageAlt="Smart Mini Projector"
            title="Smart Mini Projector"
            subtitle="Compact and stylish, perfect for cozy movie nights."
            href="/discover"
          />
          <ProductCard
            imageSrc="/images/aroma.jpg"
            imageAlt="Smart Aroma Diffuser"
            title="Smart Aroma Diffuser"
            subtitle="Calm your space with a fine, refreshing mist."
            href="/discover"
          />
        </div>
      </Section>

      {/* Divider Line */}
      <div className="w-full border-t border-gray-200 mt-16 mb-10"></div>

      {/* Footer Preview */}
      <footer className="text-center text-gray-500 text-sm pb-8">
        © {new Date().getFullYear()} AcrossBay — Smart Lifestyle Discoveries
      </footer>
    </main>
  );
}
