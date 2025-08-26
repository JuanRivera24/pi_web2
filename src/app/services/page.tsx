// src/app/services/page.tsx
export default function ServicesPage() {
  const servicios = [
    { id: 1, nombre: "Corte clásico", duracion: "30 min", precio: 15000 },
    { id: 2, nombre: "Corte moderno", duracion: "40 min", precio: 20000 },
    { id: 3, nombre: "Perfilado de barba", duracion: "20 min", precio: 10000 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Servicios</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {servicios.map(s => (
          <div key={s.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{s.nombre}</h3>
            <div className="text-sm text-gray-500">{s.duracion}</div>
            <div className="mt-2 font-medium">${s.precio}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
