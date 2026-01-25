import Link from "next/link";

function Item({ title, desc, tag }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="rounded-full border px-2 py-1 text-xs text-gray-600">{tag}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4">
        <button className="rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white">
          Request details
        </button>
      </div>
    </div>
  );
}

export default function SelectionEN() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Selection</h1>
        <p className="mt-5 text-base text-gray-600 md:text-lg">
          Few elements, chosen and explained. Only what makes sense: quality, clarity, and purpose.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Item title="Recovery & self-care" desc="Tools and accessories with clear use and real value." tag="Wellness" />
        <Item title="Grounding & decompression" desc="Presence objects: materials, calm gestures, meaning." tag="Mindful" />
        <Item title="Selected herbal line" desc="Supply chain, logic, conscious use. No promises." tag="Herbal" />
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-600">Want to propose a product or ask something?</p>
        <Link href="/en/contact" className="mt-3 inline-block rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:border-gray-400">
          Contact us
        </Link>
      </div>
    </div>
  );
}
