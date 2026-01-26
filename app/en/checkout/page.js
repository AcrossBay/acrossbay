export default function CheckoutEn() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Payment</h1>
      <p className="text-gray-700 mb-6">
        Secure payment. We will place the Stripe payment link here to complete the order.
      </p>

      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium"
      >
        Go to payment
      </a>

      <p className="mt-6 text-sm text-gray-500">
        Note: we will replace “#” with the real Payment Link.
      </p>
    </main>
  );
}
