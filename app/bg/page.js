import Link from "next/link";

export default function HomeBG() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 text-center">
      <h1 className="text-4xl font-semibold md:text-5xl">
        Продукти, които изискват разбиране, не импулсивни покупки.
      </h1>
      <p className="mt-5 text-gray-600">
        AcrossBay подбира качествени продукти за ежедневието и благосъстоянието.
      </p>

      <div className="mt-8 flex justify-center gap-3">
        <Link href="/bg/health" className="rounded-full bg-black px-6 py-3 text-white">
          Виж селекцията
        </Link>
        <Link href="/bg/about" className="rounded-full border px-6 py-3">
          За нас
        </Link>
      </div>
    </div>
  );
}
