import React from 'react';
import Port from '../assets/port.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-lvh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Port})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto md:px-28 2xl:px-32 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full">
          <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-normal text-white leading-tight">
              Tu importación,<br />
              <span className="text-white">en manos expertas.</span>
            </h1>
          </div>

          <div className="flex-1 lg:pl-16 max-w-lg">
            <div className="space-y-6">
              <p className="text-md text-gray-200 leading-relaxed">
                Asistimos a empresas, pymes y emprendedores con experiencia, tecnología y
                un enfoque sin complicaciones.
              </p>
              <p className="text-md text-gray-200 leading-relaxed">
                Nuestro trato cercano y personalizado asegura un proceso claro, seguro
                y eficiente.
              </p>

              <div className="flex justify-left items-center pt-4 gap-4">
                <button className="bg-gradient-to-r from-[#035EBB] to-[#002052] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold text-xs">
                  Solicitá tu cotización
                </button>
                <button className="border-2 border-white text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-slate-900 transition-colors font-semibold text-xs">
                  Quiero más info.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;