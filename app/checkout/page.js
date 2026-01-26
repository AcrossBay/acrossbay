export default function CheckoutIt() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Pagamento</h1>
      <p className="text-gray-700 mb-6">
        Pagamento sicuro. Inseriremo qui il link di pagamento (Stripe) per completare l’ordine.
      </p>

      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium"
      >
        Vai al pagamento
      </a>

      <p className="mt-6 text-sm text-gray-500">
        Nota: sostituiremo “#” con il Payment Link reale.
      </p>
    </main>
  );
}
