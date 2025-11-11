export default function SmallCard({ title, href, img = "", caption }) {
  return (
    <a
      href={href}
      className="group block rounded-xl border hover:shadow-sm transition bg-white"
    >
      {/* immagine (se manca il file, il blocco resta pulito) */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-gray-100">
        {img ? (
          // uso <img> semplice per evitare config domini; se manca, non appare
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : null}
      </div>
      <div className="p-3">
        <h4 className="text-sm font-medium">{title}</h4>
        {caption ? (
          <p className="text-xs text-gray-600 mt-0.5">{caption}</p>
        ) : null}
      </div>
    </a>
  );
}
