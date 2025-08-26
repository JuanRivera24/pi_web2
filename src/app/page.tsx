
"use client";

import Login from "@/components/auth/LoginForm";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
            {/* Hero / Bienvenida */}
            <section className="text-center py-30 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white w-full">
                <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
                    Kingdom Barber ✂️👑
                </h1>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed">
                    En <span className="font-semibold">Kingdom Barber</span> creemos que
                    un buen corte no solo transforma tu estilo, también eleva tu confianza.
                    Somos más que una barbería: somos un espacio donde tradición,
                    excelencia y modernidad se unen para que vivas una experiencia única.
                </p>
                <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
                    Ven a disfrutar de un servicio premium, pensado para quienes saben que
                    el cuidado personal es parte de su reino. 💈👑
                </p>
            </section>

            {/* Aquí aparece el Login */}
            <section className="py-12 w-full flex justify-center">
                <Login />
            </section>
        </main>
    );

}
