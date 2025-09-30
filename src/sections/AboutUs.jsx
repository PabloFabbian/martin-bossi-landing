import React from 'react';
import StepItem from '../components/StepItem';
import OutlineButton from '../components/OutlineButton';
import Map from '../assets/map.webp';

const Connections = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 -scroll-mt-10 md:scroll-mt-16 2xl:scroll-mt-24" id="nosotros">
      <div className="absolute inset-0 z-0">
        <img
          src={Map}
          alt="Mapa mundial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-white text-xs uppercase tracking-wide">Conexiones</p>
          <h2 className="text-white text-4xl md:text-4xl 2xl:text-5xl font-semibold leading-tight">
            Tu socio estratégico<br />en <u className="text-[#0466c8]">comercio exterior</u>
          </h2>
          <p className="text-white/80 text-sm max-w-md">
            Importamos mercaderías a Argentina, ya sea con tus proveedores
            o encontrando nuevos socios y productos en el exterior.
          </p>
          <div className="flex gap-4 flex-wrap">
            <OutlineButton
              onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Contáctanos
            </OutlineButton>
            <button
              className="group text-white text-sm font-medium flex items-center gap-1 tracking-wide transition-all"
              onClick={() => {
                document.getElementById('servicios')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white group-hover:after:w-full after:transition-all after:duration-300">
                Asesoría
              </span>
              <span
                className="select-none transform transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <StepItem
            step="1"
            title="Enfoque personalizado para tu negocio"
            description="Investigamos tipo y calidad de producto, generamos reportes, presupuestos y propuestas claras.
                        Podés acceder a contratos de servicios periódicos que se ajusten a tu realidad."
            showLine={true}
            index={0}
          />
          <StepItem
            step="2"
            title="Logística eficiente para tus importaciones"
            description="Contamos con profesionales del transporte multimodal, fletes y almacenamiento.
                        Sabés en todo momento dónde está tu mercadería y la manipulamos en tiempo y forma hasta su destino."
            showLine={true}
            index={1}
          />
          <StepItem
            step="3"
            title="Trámites simplificados y gestión de pagos"
            description="Nos ocupamos de permisos, certificados y validaciones ante organismos.
                        Gestionamos de forma anticipada los requisitos de seguridad para despacho oportuno.
                        Además, coordinamos el pago de la mercadería a tu proveedor y de los agentes de transporte y despachantes nacionales."
            showLine={true}
            index={2}
          />
          <StepItem
            step="4"
            title="Importación confiable y segura"
            description="Te acompañamos paso a paso, garantizando que tu mercadería llegue a tiempo, 
                        sin complicaciones y en cumplimiento con las normas vigentes."
            showLine={false}
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Connections;