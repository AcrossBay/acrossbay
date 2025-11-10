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
      </p>
      <div className="text-sm text-gray-500">
        AcrossBay © {new Date().getFullYear()} – Tutti i diritti riservati.
      </div>
    </main>
  );
}
