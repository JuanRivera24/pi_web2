// src/app/page.tsx
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="bg-white rounded shadow p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">KingdomBarber</h1>
        <p className="text-gray-600 mb-4">Bienvenido al prototipo de la página de la barbería. Puedes ver servicios, registrarte e iniciar sesión.</p>
        <div className="flex gap-3">
          <Link href="/services" className="px-4 py-2 bg-blue-600 text-white rounded">Ver servicios</Link>
          <Link href="/auth/Register" className="px-4 py-2 bg-indigo-600 text-white rounded">Crear cuenta</Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Corte clásico</h3>
          <p className="text-sm text-gray-500">Corte tradicional y perfilado.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Afeitado clásico</h3>
          <p className="text-sm text-gray-500">Afeitado con toalla caliente y productos premium.</p>
        </div>
      </section>
    </div>
  );
}
