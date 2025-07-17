import React from 'react';

const benefits = [
  {
    icon: (
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        
      </div>
    ),
    text: "Tu aliado confiable en cada etapa del proceso logístico.",
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        
      </div>
    ),
    text: "Procesos validados y certificados para tu tranquilidad.",
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        
      </div>
    ),
    text: "Menos burocracia, más velocidad en cada gestión.",
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        
      </div>
    ),
    text: "Detectamos oportunidades reales en origen y producto.",
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        
      </div>
    ),
    text: "Optimizamos tu logística para generar mayor rentabilidad.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-gradient-to-r from-[#0D1224] to-[#13182C] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-left gap-4">
            {benefit.icon}
            <p className="text-white text-sm md:text-base leading-relaxed">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;