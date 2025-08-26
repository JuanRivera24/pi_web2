// src/app/layout.tsx
import React from "react";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "KingdomBarber",
  description: "Proyecto integrador - Barbería",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
