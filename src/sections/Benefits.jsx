import React, { useEffect, useRef } from 'react';
import trato from '../assets/Benefits/trato.png';
import medalla from '../assets/Benefits/medalla.png';
import tiempo from '../assets/Benefits/tiempo.png';
import buscar from '../assets/Benefits/buscar.png';
import ganancia from '../assets/Benefits/ganancia.png';

const benefits = [
  {
    icon: <img src={trato} alt="icono trato" className="w-14 h-14" />,
    text: "Tu aliado confiable en cada etapa del proceso logístico.",
  },
  {
    icon: <img src={medalla} alt="icono medalla" className="w-14 h-14" />,
    text: "Procesos validados y certificados para tu tranquilidad.",
  },
  {
    icon: <img src={tiempo} alt="icono tiempo" className="mt-1 w-[3.25rem] h-[3.25rem]" />,
    text: "Menos burocracia, más velocidad en cada gestión.",
  },
  {
    icon: <img src={buscar} alt="icono buscar" className="w-14 h-14" />,
    text: "Detectamos oportunidades reales en origen y producto.",
  },
  {
    icon: <img src={ganancia} alt="icono ganancia" className="w-14 h-14" />,
    text: "Optimizamos tu logística para generar mayor rentabilidad.",
  },
];

const Benefits = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('flip-in');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0C0C1C] to-[#13182C] pt-16 pb-[4.75rem] px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-left perspective">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="benefit-card opacity-0 rotateY-90 flex flex-col items-start text-left gap-4 transition-transform duration-700 ease-out"
          >
            {benefit.icon}
            <p className="text-white text-sm md:text-base 2xl:text-lg leading-relaxed min-h-[4.5rem]">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;