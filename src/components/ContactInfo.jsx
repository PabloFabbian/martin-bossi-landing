import React from 'react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-slate-300 text-sm font-medium mb-2 ml-0.5">Contáctanos</p>
        <h1 className="text-[2.6rem] font-normal mb-6">Contáctanos hoy</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Estamos aquí para ayudarte con tus necesidades de importación.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 flex-shrink-0">
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.75a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <a href="mailto:martin.bossi.adm@gmail.com" className="text-white hover:text-blue-400 transition-colors underline">
            martin.bossi.adm@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 flex-shrink-0">
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <a href="tel:+15551234567" className="text-white hover:text-blue-400 transition-colors underline">
            +54 9 11 8858-9351
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 flex-shrink-0">
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-white">
            Calle Ejemplo 123, Ciudad, Estado 2000 AU
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;