import React from "react";

const CookieModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="relative bg-gradient-to-br from-[#0D1224]/90 to-[#1c2440]/90 text-white rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-fade-in">
                <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-gradient-to-r from-[#3A7DFF] to-[#001E99] blur-xl opacity-30"></div>

                <h2 className="text-2xl font-bold mb-4 text-center">
                    Configuración de Cookies
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-white/80">
                    Este sitio utiliza únicamente <span className="font-semibold">cookies necesarias </span>
                    para su correcto funcionamiento y para recordar sus preferencias de navegación.
                    No utilizamos cookies de seguimiento, publicidad ni de terceros.
                    Puede configurar su navegador para bloquear o eliminar cookies en cualquier momento,
                    aunque esto podría afectar el funcionamiento del sitio.
                </p>

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-white/80 hover:text-white transition"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieModal;