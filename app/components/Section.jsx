"use client";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="w-full border-t border-gray-200 bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {title && (
          <header className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            {subtitle && (
              <p className="text-gray-600 mt-1">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
