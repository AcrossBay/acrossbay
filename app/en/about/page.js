export default function AboutEN() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About AcrossBay</h1>
        <p className="mt-6 text-base text-gray-600 md:text-lg">
          AcrossBay is not a marketplace. It’s a curated selection: few products, chosen for quality, real utility and coherence.
          No impulse buying.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Selection</h3>
            <p className="mt-2 text-sm text-gray-600">Few items. Each choice must have a reason (materials, function, reliability).</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Context</h3>
            <p className="mt-2 text-sm text-gray-600">We explain what it’s for, who it’s for, and what to expect. No “miracles”.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Simplicity</h3>
            <p className="mt-2 text-sm text-gray-600">A clear showcase: few blocks, few choices, simple path.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
