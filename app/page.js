import Image from "next/image";

export const metadata = {
  title: "AcrossBay | Smart Finds & Global Style",
  description:
    "Discover timeless products, inspired by coastal simplicity and smart living.",
};

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero minimale */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Live the Coastal Lifestyle
        </h1>
        <p className="text-gray-600">
          Smart and stylish essentials curated from global marketplaces.
        </p>
      </section>

      {/* Griglia prodotti—senza titolo “Made in Italy” in grande */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="rounded-lg shadow-sm hover:shadow-md transition p-4">
            <Image
              src="/linen-shirt.jpg"
              alt="Linen Shirt"
              width={600}
              height={400}
              className="rounded-md w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-lg font-medium text-center">Linen Shirt</h3>
          </div>

          <div className="rounded-lg shadow-sm hover:shadow-md transition p-4">
            <Image
              src="/ceramics.jpg"
              alt="Ceramics"
              width={600}
              height={400}
              className="rounded-md w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-lg font-medium text-center">Ceramics</h3>
          </div>

          <div className="rounded-lg shadow-sm hover:shadow-md transition p-4">
            <Image
              src="/leather-bag.jpg"
              alt="Leather Bag"
              width={600}
              height={400}
              className="rounded-md w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-lg font-medium text-center">Leather Bag</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
