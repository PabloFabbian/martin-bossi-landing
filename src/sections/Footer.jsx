import React from "react";
import Logo from '../assets/isologo_night.png';

const Footer = () => {
  return (
    <footer className="bg-[#040616] text-white px-6 py-12" id="contacto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4">
          <img src={Logo} alt="Logo Martin Bossi" className="w-32" />

          <div>
            <p className="font-semibold">Dirección:</p>
            <p>Avenida Santa Fe 1170, Acassuso - Zona Norte</p>
            <p className="underline">Buenos Aires, Argentina</p>
          </div>

          <div>
            <p className="font-semibold">Contacto:</p>
            <p className="underline">1800 123 4567</p>
            <p className="underline">correo@ejemplo.com</p>
          </div>

          <div className="flex space-x-4 pt-2">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/x.svg" alt="X" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="space-y-2 pl-20 md:pl-36 text-start">
              <a href="#" className="block hover:underline">Nosotros</a>
              <a href="#" className="block hover:underline">Servicios</a>
              <a href="#" className="block hover:underline">Cotizá tu operación</a>
              <a href="#" className="block hover:underline">Contacto</a>
              <a href="#" className="block hover:underline">FAQ's</a>
            </div>

            <div className="rounded-xl overflow-hidden shadow-[0_0_25px_#FFD70044]">
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9387711894496!2d-73.9685432845937!3d40.8075359793215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f62c21b0f0c3%3A0xc25e5e6b685ea8a!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1684522160402!5m2!1ses!2sar"
                className="w-full aspect-[2/1] border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left mb-4 md:mb-0">© 2025 Relume. Todos los derechos reservados.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Política de Privacidad</a>
          <a href="#" className="hover:underline">Términos de Servicio</a>
          <a href="#" className="hover:underline">Configuración de Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;