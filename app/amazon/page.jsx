import { getAmazonLink } from "../../lib/links";

export default function Page() {
  const items = [
    { title: "Smart Lamp Minimal", img: "/images/lamp-smart.webp", url: "https://www.amazon.co.uk/dp/AAAAAAAA", price: "£29.99", desc: "Illuminazione intelligente con design pulito." },
    { title: "Mini Projector 1080p", img: "/images/projector-mini.webp", url: "https://www.amazon.co.uk/dp/BBBBBBBB", price: "£69.00", desc: "Compatto, silenzioso, perfetto per home cinema." },
    { title: "Desk Organizer Set", img: "/images/desk-organizer.webp", url: "https://www.amazon.co.uk/dp/CCCCCCCC", price: "£24.90", desc: "Ordine e stile per la scrivania." },
  ];

  return (
    <main className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Amazon Finds · AcrossBay</h1>
      <p className="mb-8 text-gray-600">Selezione di prodotti tech e lifestyle con spedizione rapida.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <div key={i} className="border rounded-2xl p-4 shadow-sm">
            <img src={it.img} alt={it.title} className="rounded-xl mb-3" />
            <h2 className="font-semibold text-lg mb-1">{it.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{it.desc}</p>
            <p className="text-sm mb-4">{it.price}</p>
            <a href={getAmazonLink(it.url)} className="text-teal-600 font-semibold" target="_blank" rel="noreferrer">View on Amazon →</a>
          </div>
        ))}
      </div>
    </main>
  );
}
