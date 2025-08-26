// src/app/auth/Login/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginLocal } from "../../../services/auth.client";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login submit:", form);
    const res = loginLocal(form.email, form.password);
    console.log("loginLocal result:", res);
    if (!res.ok) setError(res.error || "Error");
    else router.push("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={submit} className="space-y-3 bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-bold">Iniciar sesión</h2>
        {error && <div className="text-red-600">{error}</div>}
        <input
          className="w-full border px-3 py-2 rounded"
          type="email"
          placeholder="Correo"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        {/* <- type="submit" es la corrección clave */}
        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
