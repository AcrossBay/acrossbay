import Link from "next/link";

export default function HomeRO() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 text-center">
      <h1 className="text-4xl font-semibold md:text-5xl">
        Produse care cer înțelegere, nu cumpărături impulsive.
      </h1>
      <p className="mt-5 text-gray-600">
        AcrossBay selectează produse de calitate pentru bunăstare și viața de zi cu zi.
      </p>

      <div className="mt-8 flex justify-center gap-3">
        <Link href="/ro/health" className="rounded-full bg-black px-6 py-3 text-white">
          Vezi selecția
        </Link>
        <Link href="/ro/about" className="rounded-full border px-6 py-3">
          Despre noi
        </Link>
      </div>
    </div>
  );
}
