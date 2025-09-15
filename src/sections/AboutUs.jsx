import React from 'react';
import StepItem from '../components/StepItem';
import OutlineButton from '../components/OutlineButton';
import Map from '../assets/map.jpg';

const Connections = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 md:scroll-mt-12 2xl:scroll-mt-36" id="nosotros">
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
            Ofrecemos asesoría integral en comercio internacional. Nuestra experiencia y tecnología garantizan un proceso ágil y eficiente.
          </p>
          <div className="flex gap-4 flex-wrap">
            <OutlineButton>Contáctanos</OutlineButton>
            <button
              className="group text-white text-sm font-medium flex items-center gap-1 tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFAE2B] transition-all"
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
            title="Asesoría personalizada para tu negocio"
            description="Te ayudamos a navegar el complejo mundo del comercio exterior."
            showLine={true}
            index={0}
          />
          <StepItem
            step="2"
            title="Logística eficiente para tus importaciones"
            description="Optimiza tus operaciones logísticas con nuestros expertos."
            showLine={true}
            index={1}
          />
          <StepItem
            step="3"
            title="Gestión de trámites simplificada y efectiva"
            description="Nos encargamos de los trámites para que tú no tengas que hacerlo."
            showLine={true}
            index={2}
          />
          <StepItem
            step="4"
            title="Importación confiable y segura de productos"
            description="Nos encargamos de todo el proceso para que tus productos lleguen a tiempo y sin complicaciones, garantizando calidad y cumplimiento normativo."
            showLine={false}
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Connections;
