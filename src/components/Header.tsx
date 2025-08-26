// src/components/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getSession, logout, Session } from "../services/auth.client";
import { useRouter } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState<Session>(null);
  const router = useRouter();

  useEffect(() => {
    setUser(getSession());
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push("/auth/Login");
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">KingdomBarber</Link>
          <nav className="hidden md:flex gap-3 text-sm">
            <Link href="/services" className="text-gray-600 hover:underline">Servicios</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-700">Hola, {user.nombre}</span>
              <Link href="/profile" className="px-3 py-1 bg-gray-100 rounded">Perfil</Link>
              <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded">Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link href="/auth/Login" className="px-3 py-1 border rounded">Iniciar sesión</Link>
              <Link href="/auth/Register" className="px-3 py-1 bg-indigo-600 text-white rounded">Crear cuenta</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
