import React from 'react';

const ContactInfo = () => {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-white/70 text-xs font-medium mb-2 ml-0.5 uppercase tracking-wide">ASESORÍA</p>
        <h1 className="text-[2.6rem] font-semibold mb-6 text-white">Contactanos hoy</h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-[500px]">
          Expandí tu negocio con el respaldo de expertos.
        </p>
        <p className="text-white/80 text-lg leading-relaxed max-w-[500px] mt-3">
          Te guiamos paso a paso para importar con seguridad, eficiencia y visión estratégica.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 flex-shrink-0">
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.75a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <a href="mailto:martin.bossi.adm@gmail.com" className="text-white hover:text-[#0466C8] transition-colors duration-300 underline">
            martin.bossi.adm@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 flex-shrink-0">
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <a href="tel:+5491171077116" className="text-white hover:text-[#0466C8] transition-colors duration-300 underline">
            +54 9 11 7107 7116
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 flex-shrink-0">
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-white">Av. Juan Alberdi N° 875 1°</p>
            <p className="text-white">Ciudad Autónoma de Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;