// src/services/auth.client.ts
"use client";

export type Session = { id: number; nombre: string; email: string; rol?: string } | null;

const USERS_KEY = "kb_users";
const SESSION_KEY = "kb_auth";

function safeParse(v: string | null) {
  try { return v ? JSON.parse(v) : null; } catch { return null; }
}

function getUsers(): any[] {
  return safeParse(localStorage.getItem(USERS_KEY)) || [];
}
function saveUsers(list: any[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
}

export function getSession(): Session {
  return safeParse(localStorage.getItem(SESSION_KEY));
}

export function registerLocal(data: { nombre: string; email: string; password: string; telefono?: string; rol?: string }) {
  const users = getUsers();
  if (users.some((u: any) => u.email === data.email)) return { ok: false, error: "Email ya registrado" };
  const newUser = { id: Date.now(), ...data, rol: data.rol || "client" };
  users.push(newUser);
  saveUsers(users);
  return { ok: true, user: newUser };
}

export function loginLocal(email: string, password: string) {
  const users = getUsers();
  const u = users.find((x: any) => x.email === email && x.password === password);
  if (!u) return { ok: false, error: "Credenciales inválidas" };
  const session = { id: u.id, nombre: u.nombre || "Usuario", email: u.email, rol: u.rol || "client" };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { ok: true, user: session };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}
