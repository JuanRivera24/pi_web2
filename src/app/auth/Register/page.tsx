// src/app/auth/Register/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { registerLocal } from "../../../services/auth.client";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", email: "", password: "", telefono: "", rol: "client" });
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = registerLocal(form);
    if (!res.ok) setError(res.error || "Error");
    else {
      alert("Usuario creado (demo). Ahora inicia sesión.");
      router.push("/auth/Login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={submit} className="space-y-3 bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-bold">Crear cuenta</h2>
        {error && <div className="text-red-600">{error}</div>}
        <input className="w-full border px-3 py-2 rounded" placeholder="Nombre" value={form.nombre}
               onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
        <input className="w-full border px-3 py-2 rounded" type="email" placeholder="Correo" value={form.email}
               onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="w-full border px-3 py-2 rounded" type="password" placeholder="Contraseña" value={form.password}
               onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <div className="flex gap-2">
          <input className="flex-1 border px-3 py-2 rounded" placeholder="Teléfono" value={form.telefono}
                 onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
          <select className="w-40 border px-3 py-2 rounded" value={form.rol}
                  onChange={(e) => setForm({ ...form, rol: e.target.value })}>
            <option value="client">Cliente</option>
            <option value="barber">Barbero</option>
          </select>
        </div>
        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded">Crear cuenta</button>
      </form>
    </div>
  );
}
