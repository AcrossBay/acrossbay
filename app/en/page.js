'use client';

import Link from 'next/link';

const STRIPE_PAY_LINK = 'https://buy.stripe.com/bJe3cxd9M8VIdaa90v2kw00';

export default function Page() {
  return (
    <main style={{ padding: 24, maxWidth: 980, margin: '0 auto' }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 34, margin: 0 }}>AcrossBay</h1>
        <p style={{ marginTop: 10, fontSize: 16, opacity: 0.85 }}>
          Curated products. Fast orders. Secure payment.
        </p>
      </header>

      <section
        style={{
          border: '1px solid rgba(0,0,0,0.12)',
          borderRadius: 12,
          padding: 18,
          marginBottom: 18,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20 }}>Pay now</h2>
        <p style={{ marginTop: 10, marginBottom: 16, opacity: 0.85 }}>
          Use the Stripe payment link to complete your order in seconds.
        </p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a
            href={STRIPE_PAY_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '10px 14px',
              borderRadius: 10,
              border: '1px solid rgba(0,0,0,0.12)',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Pay with Stripe
          </a>

          <Link
            href="/"
            style={{
              padding: '10px 14px',
              borderRadius: 10,
              border: '1px solid rgba(0,0,0,0.12)',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Italiano
          </Link>
        </div>

        <div style={{ marginTop: 14, fontSize: 13, opacity: 0.7 }}>
          Payment link: <span style={{ wordBreak: 'break-all' }}>{STRIPE_PAY_LINK}</span>
        </div>
      </section>
    </main>
  );
}
