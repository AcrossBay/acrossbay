// app/ebay/page.jsx
import { getEbayLink } from "../../lib/links";

export default function Page() {
  const items = [
    {
      title: "Cuffie Vintage 80s",
      img: "/retro-console.webp",
      url: "https://www.ebay.co.uk/itm/1234567890", // <-- metti un link eBay reale
      price: "£39.90",
      desc: "Design retro con driver moderni."
    },
    {
      title: "Orologio Classic Quartz",
      img: "/projector.jpg",
      url: "https://www.ebay.co.uk/itm/2345678901",
      price: "£49.00",
      desc: "Eleganza minimal, cinturino in pelle."
    },
    {
      title: "Retro Console Portable",
      img: "/retro-console.webp",
      url: "https://www.ebay.co.uk/itm/3456789012",
      price: "£29.90",
      desc: "Tanti giochi classici in tasca."
    }
  ];

  return (
    <main className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">eBay Finds · AcrossBay</h1>
      <p className="mb-8 text-gray-600">Occasioni autentiche e selezioni smart dal marketplace piu dinamico.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <div key={i} className="border rounded-2xl p-4 shadow-sm">
            <img src={it.img} alt={it.title} className="rounded-xl mb-3" />
            <h2 className="font-semibold text-lg mb-1">{it.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{it.desc}</p>
            <p className="text-sm mb-4">{it.price}</p>
            <a
              href={getEbayLink(it.url)}
              className="text-teal-600 font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              View on eBay →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
