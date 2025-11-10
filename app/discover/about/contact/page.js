export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h2>
      <p className="text-gray-600">Scrivici: hello@acrossbay.xyz</p>
      <a
        href="mailto:hello@acrossbay.xyz"
        className="inline-flex items-center rounded-full px-5 py-2.5 bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition"
      >
        Send Email
      </a>
    </section>
  );
}
