import React from 'react';
import ConnectionItem from '../components/ConnectionItem';
import OutlineButton from '../components/OutlineButton';
import Map from '../assets/map.jpg';

const Connections = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={Map} 
          alt="Mapa mundial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        <div className="flex flex-col justify-center gap-6">
          <p className="text-white text-sm uppercase tracking-wide">Conexiones</p>
          <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
            Tu socio estratégico<br />en comercio exterior
          </h2>
          <p className="text-white/80 text-base max-w-md">
            Ofrecemos asesoría integral en comercio internacional. Nuestra experiencia y tecnología garantizan un proceso ágil y eficiente.
          </p>
          <div className="flex gap-4 flex-wrap">
            <OutlineButton>Contáctanos</OutlineButton>
            <button className="text-white text-sm flex items-center gap-1 hover:underline">
              Asesoría <span>→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <ConnectionItem
            icon=""
            title="Asesoría personalizada para tu negocio"
            description="Te ayudamos a navegar el complejo mundo del comercio exterior."
          />
          <ConnectionItem
            icon=""
            title="Logística eficiente para tus importaciones"
            description="Optimiza tus operaciones logísticas con nuestros expertos."
          />
          <ConnectionItem
            icon=""
            title="Gestión de trámites simplificada y efectiva"
            description="Nos encargamos de los trámites para que tú no tengas que hacerlo."
          />
        </div>
      </div>
    </section>
  );
};

export default Connections;