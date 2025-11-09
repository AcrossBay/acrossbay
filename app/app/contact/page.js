export default function ContactPage() {
  return (
    <div className="max-w-lg">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-slate-600">Scrivici per collaborazioni o domande.</p>

      <form className="mt-6 space-y-4">
        <input className="w-full rounded-md border px-3 py-2" placeholder="Nome" />
        <input className="w-full rounded-md border px-3 py-2" placeholder="Email" type="email" />
        <textarea className="w-full rounded-md border px-3 py-2" rows="5" placeholder="Messaggio" />
        <button className="rounded-md bg-slate-900 text-white px-4 py-2">Invia</button>
      </form>
    </div>
  );
}
