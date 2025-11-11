import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AcrossBay | Smart Finds & Global Style",
  description: "Discover timeless products, inspired by coastal simplicity and smart living.",
};

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Live the Coastal Lifestyle
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Smart and stylish essentials curated from global marketplaces.
        </p>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Made in Italy</h2>
        <p className="text-gray-500 mb-10">
          Limited drops, timeless essentials. Italian design, crafted with style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="rounded-lg shadow-sm hover:shadow-md transition p-4">
            <Image
              src="/linen-shirt.jpg"
              alt="Linen Shirt"
              width={400}
              height={400}
              className="rounded-md w-full object-cover"
            />
            <h3 className="mt-4 text-lg font-medium">Linen Shirt</h3>
          </div>

          <div className="rounded-lg shadow-sm hover:shadow-md transition p-4">
            <Image
              src="/ceramics.jpg"
              alt="Ceramics"
              width={400}
              height={400}
              className="rounded-md w-full object-cover"
            />
            <h3 className="mt-4 text-lg font-medium">Ceramics</h3>
          </div>

          <div className="rounded-lg shadow-sm hover:shadow-md transition p-4">
            <Image
              src="/leather-bag.jpg"
              alt="Leather Bag"
              width={400}
              height={400}
              className="rounded-md w-full object-cover"
            />
            <h3 className="mt-4 text-lg font-medium">Leather Bag</h3>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/made-in-italy"
            className="text-sky-600 font-medium hover:underline"
          >
            Explore Made in Italy →
          </Link>
        </div>
      </section>
    </main>
  );
}
