export const metadata = {
  title: "Contact | AcrossBay",
  description: "Contatti ufficiali di AcrossBay",
};
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-4">Contattaci</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
        Hai domande o collaborazioni? Scrivici a{" "}
        <a href="mailto:massi@across-bay.com" className="text-teal-600 underline">
          massi@across-bay.com
        </a>{" "}
        e ti risponderemo presto.
          <div className="text-sm text-gray-500">
          <form className="w-full max-w-md mt-4">
  <input
    type="text"
    placeholder="Il tuo nome"
    className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
    required
  />
  <input
    type="email"
    placeholder="La tua email"
    className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
    required
  />
  <textarea
    placeholder="Il tuo messaggio"
    className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
    rows="4"
    required
  ></textarea>
  <button
    type="submit"
    className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition"
  >
    Invia messaggio
  </button>
</form>

      </p>
      <div className="text-sm text-gray-500">
        AcrossBay © {new Date().getFullYear()} – Tutti i diritti riservati.
      </div>
    </main>
  );
}
