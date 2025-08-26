// src/app/profile/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { getSession, logout } from "../../services/auth.client";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getSession());
  }, []);

  if (!user) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        No hay sesión activa. <a className="underline text-blue-600" href="/auth/Login">Ir a Login</a>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow space-y-2">
      <h2 className="text-xl font-bold">Perfil</h2>
      <div><b>Nombre:</b> {user.nombre}</div>
      <div><b>Email:</b> {user.email}</div>
      <div><b>Rol:</b> {user.rol}</div>
      <button onClick={() => { logout(); location.href = "/auth/Login"; }}
              className="mt-4 px-3 py-2 bg-red-600 text-white rounded">
        Cerrar sesión
      </button>
    </div>
  );
}
