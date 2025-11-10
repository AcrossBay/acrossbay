"use client";
import { useEffect, useState } from "react";

export default function Health() {
  const [font, setFont] = useState("unknown");

  useEffect(() => {
    try {
      const f = getComputedStyle(document.body).fontFamily;
      setFont(f);
    } catch {}
  }, []);

  return (
    <main className="min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-semibold">AcrossBay — Health Check</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 rounded-lg bg-sky-100 border">
          Tailwind color test (dovrebbe essere azzurro chiaro)
        </div>

        <div className="p-4 rounded-lg bg-white border shadow">
          Card style test (bordo + ombra)
        </div>

        <div className="p-4 rounded-lg border">
          <p>Font detect:</p>
          <code className="text-sm">{font}</code>
        </div>
      </div>

      <p className="text-sm text-slate-500">
        Build timestamp: {new Date().toISOString()}
      </p>
    </main>
  );
}
