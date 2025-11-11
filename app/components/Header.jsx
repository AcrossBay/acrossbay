import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/made-in-italy", label: "Made in Italy" },
  { href: "/amazon-findz", label: "Amazon" },
  { href: "/ebay-finds", label: "eBay" },
  { href: "/tiktok-trends", label: "TikTok" },
  { href: "/tuscany-virgin", label: "Tuscany" },
  { href: "/smart-club", label: "Smart Club" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const linkBase =
    "px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap";
  const linkInactive =
    "text-slate-600 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300";

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-teal-800 dark:text-teal-300">
          AcrossBay
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={`${linkBase} ${linkInactive}`}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile (scroll orizzontale) */}
        <nav className="md:hidden -mx-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 px-2">
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={`${linkBase} ${linkInactive}`}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
