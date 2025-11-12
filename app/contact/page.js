export default function Page() {
  return (
    <main className="max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 mb-6">
        Domande, partnership o suggerimenti? Scrivici.
      </p>

      <form action="https://formspree.io/f/yourid" method="POST" className="space-y-4">
        <input name="name" placeholder="Your name" className="w-full border rounded-xl p-3" required />
        <input name="email" type="email" placeholder="Your email" className="w-full border rounded-xl p-3" required />
        <textarea name="message" placeholder="Message" rows={5} className="w-full border rounded-xl p-3" required />
        <button className="px-5 py-3 rounded-xl bg-black text-white font-semibold">Send</button>
      </form>

      <p className="text-sm text-gray-500 mt-4">
        Oppure invia una mail a{" "}
        <a href="mailto:massi@across-bay.com" className="underline">massi@across-bay.com</a>
      </p>
    </main>
  );
}
