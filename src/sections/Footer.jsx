import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from '../assets/isologo_night.png';

const Footer = () => {
  const [copied, setCopied] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToSection', sectionId);
      navigate('/');
      return;
    }

    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#040616] text-white px-6 py-12" id="contacto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4">
          <img src={Logo} alt="Logo Martin Bossi" className="w-32" />

          <div className="cursor-default">
            <p className="font-semibold">Dirección:</p>
            <p>Av. Juan Alberdi N° 875 - 1°</p>
            <p>Ciudad Autónoma de Buenos Aires, Argentina</p>
          </div>

          <div>
            <p className="font-semibold">Contacto:</p>

            <div className="relative group">
              <p
                className="underline cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={() => {
                  handleCopy("+54 9 11 7107-7116");
                  setCopied("telefono");
                  setTimeout(() => setCopied(null), 2000);
                }}
                title="Copiar número"
              >
                +54 9 11 7107-7116
              </p>
              {copied === "telefono" && (
                <span className="absolute -top-7 left-0 text-xs bg-yellow-500 text-white px-2 py-1 rounded shadow-lg animate-fade-in">
                  ¡Número copiado!
                </span>
              )}
            </div>

            <div className="relative group">
              <p
                className="underline cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={() => {
                  handleCopy("adm.martin.bossi@gmail.com");
                  setCopied("mail");
                  setTimeout(() => setCopied(null), 2000);
                }}
                title="Copiar email"
              >
                martin.bossi.adm@gmail.com
              </p>
              {copied === "mail" && (
                <span className="absolute -top-7 left-0 text-xs bg-yellow-500 text-white px-2 py-1 rounded shadow-lg animate-fade-in">
                  ¡Mail copiado!
                </span>
              )}
            </div>
          </div>

          <div className="flex space-x-4 pt-2 pl-0.5">
            <a href="#" className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1">
              <svg className="-mt-[0.0625rem] fill-current text-white transition-colors duration-300" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"></path> </g></svg>
            </a>
            <a href="#" className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1">
              <svg className="fill-current text-white transition-colors duration-300" width="16" height="16" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" /></svg>
            </a>
            <a href="#" className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1">
              <svg className="-mt-[0.0625rem] fill-current text-white transition-colors duration-300" width="17" height="17" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z" fillRule="evenodd"></path> </g></svg>
            </a>
            <a href="#" className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1">
              <svg className="-mt-[0.0625rem] fill-current text-white transition-colors duration-300" width="17" height="17" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fillRule="evenodd"></path> </g></svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="space-y-2 pl-20 md:pl-36 text-start">
              <a href="#nosotros" onClick={(e) => scrollToSection('#nosotros', e)} className="transition-transform duration-300 hover:scale-[1.025] hover:text-yellow-400 block cursor-pointer">Nosotros</a>
              <a href="#servicios" onClick={(e) => scrollToSection('#servicios', e)} className="transition-transform duration-300 hover:scale-[1.025] hover:text-yellow-400 block cursor-pointer">Servicios</a>
              <a href="#cotizacion" onClick={(e) => scrollToSection('#cotizacion', e)} className="transition-transform duration-300 hover:scale-[1.025] hover:text-yellow-400 block cursor-pointer">Cotizá tu operación</a>
              <a href="#contacto" onClick={(e) => scrollToSection('#contacto', e)} className="transition-transform duration-300 hover:scale-[1.025] hover:text-yellow-400 block cursor-pointer">Contacto</a>
              <a href="#faq" onClick={(e) => scrollToSection('#faq', e)} className="transition-transform duration-300 hover:scale-[1.025] hover:text-yellow-400 block cursor-pointer">FAQ's</a>
            </div>

            <div className="rounded-xl overflow-hidden shadow-[0_0_25px_#FFD70044]">
              <iframe
                title="Ubicación"
                src="https://maps.google.com/maps?q=Av.+Juan+B.+Alberdi+875,+Caballito,+Buenos+Aires&z=11&output=embed"
                className="w-full aspect-[2/1] border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left mb-4 md:mb-0">© Web creada por PF Software | 2025</p>
        <div className="flex space-x-6">
          <Link
            to="/politica-de-privacidad"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline"
          >
            Política de Privacidad
          </Link>
          <a href="#" className="hover:underline">Términos de Servicio</a>
          <a href="#" className="hover:underline">Configuración de Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;