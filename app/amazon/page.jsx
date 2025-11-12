export default function Page() {
  return (
    <main className="p-8 bg-sand min-h-screen">
      <h1 className="text-3xl font-semibold mb-2 text-teal">Amazon Finds</h1>
      <p className="text-gray-700 mb-8">
        Smart lifestyle gadgets and tech accessories curated from Amazon UK — quality, utility, and modern design.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-2xl shadow p-4 text-center">
          <img src="/images/lamp-smart.webp" alt="Smart Lamp" className="rounded-xl mx-auto mb-4" />
          <h2 className="font-semibold">Smart LED Lamp</h2>
          <p className="text-sm text-gray-500">£29.99</p>
          <a href="#" className="text-teal font-medium hover:underline">View on Amazon</a>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 text-center">
          <img src="/images/mini-projector.webp" alt="Mini Projector" className="rounded-xl mx-auto mb-4" />
          <h2 className="font-semibold">Mini Projector HD</h2>
          <p className="text-sm text-gray-500">£69.00</p>
          <a href="#" className="text-teal font-medium hover:underline">View on Amazon</a>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 text-center">
          <img src="/images/desk-organizer.webp" alt="Desk Organizer" className="rounded-xl mx-auto mb-4" />
          <h2 className="font-semibold">Tech Desk Organizer</h2>
          <p className="text-sm text-gray-500">£24.90</p>
          <a href="#" className="text-teal font-medium hover:underline">View on Amazon</a>
        </div>
      </div>
    </main>
  );
}
