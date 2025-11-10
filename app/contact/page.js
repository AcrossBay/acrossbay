export const metadata = {
  title: "Contact | AcrossBay",
  description: "Contattaci per domande o collaborazioni con AcrossBay",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Contattaci</h1>
      <p className="text-lg text-center mb-8">
        Hai domande o collaborazioni? Scrivici a{" "}
        <a
          href="mailto:massi@across-bay.com"
          className="text-teal-600 underline"
        >
          massi@across-bay.com
        </a>{" "}
        e ti risponderemo presto.
      </p>

      <form
        action="https://formspree.io/f/xeovqqrn"
        method="POST"
        className="w-full max-w-md bg-gray-50 p-6 rounded-2xl shadow-md"
      >
        <label className="block mb-4">
          <span className="block font-semibold mb-1">Il tuo nome</span>
          <input
            type="text"
            name="name"
            placeholder="Il tuo nome"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="block font-semibold mb-1">La tua email</span>
          <input
            type="email"
            name="email"
            placeholder="La tua email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="block font-semibold mb-1">Il tuo messaggio</span>
          <textarea
            name="message"
            rows="4"
            placeholder="Scrivi il tuo messaggio..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition"
        >
          Invia messaggio
        </button>
      </form>

      <div className="text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} AcrossBay — Tutti i diritti riservati.
      </div>
    </main>
  );
}
