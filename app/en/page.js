import Link from "next/link";

function Card({ title, desc, href }) {
  return (
    <Link href={href} className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow">
      <div className="h-32 rounded-xl bg-gray-100" />
      <div className="mt-4">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}

export default function HomeEN() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Products that require understanding, not impulse buying.
        </h1>
        <p className="mt-5 text-base text-gray-600 md:text-lg">
          AcrossBay curates high-quality items for wellness and everyday life. Few elements, chosen and explained.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/en/health" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-black">
            Explore selection
          </Link>
          <Link href="/en/about" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:border-gray-400">
            Approach
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card title="Recovery & self-care" desc="Serious tools, clearly explained. No gadgets." href="/en/health" />
        <Card title="Grounding & decompression" desc="Presence objects: materials, calm gestures, meaning." href="/en/health" />
        <Card title="Selected herbal lines" desc="Supply chain, logic, conscious use. No “miracles”." href="/en/herbal-bay" />
      </div>
    </div>
  );
}
