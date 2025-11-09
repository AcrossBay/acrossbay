export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '4rem', textAlign: 'center', background: '#F7F7F5' }}>
      <h1 style={{ fontSize: '3rem', color: '#067A7A' }}>AcrossBay</h1>
      <p style={{ color: '#333', maxWidth: 600, margin: '1rem auto' }}>
        Discover smarter tech‑lifestyle products. A curated selection from trusted marketplaces.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/discover" style={{ background: '#067A7A', color: '#fff', padding: '0.8rem 1.6rem', borderRadius: '1.2rem', textDecoration: 'none' }}>Discover</a>
      </div>
    </main>
  );
}
