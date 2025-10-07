import React, { useEffect, useRef } from 'react';
import OptimizedImage from '../components/OptimizedImage';
import trato from '../assets/Benefits/trato.webp';
import medalla from '../assets/Benefits/medalla.webp';
import tiempo from '../assets/Benefits/tiempo.webp';
import buscar from '../assets/Benefits/buscar.webp';
import ganancia from '../assets/Benefits/ganancia.webp';

const benefits = [
  {
    icon: trato,
    alt: "icono trato",
    className: "w-14 h-14",
    text: "Tu aliado confiable en cada etapa del proceso logístico.",
  },
  {
    icon: medalla,
    alt: "icono medalla",
    className: "sm:w-14 w-16 h-auto ml-6 sm:-ml-1",
    text: "Procesos validados y certificados que garantizan seguridad.",
  },
  {
    icon: tiempo,
    alt: "icono tiempo",
    className: "mt-1 w-[3.25rem] h-[3.25rem]",
    text: "Menos burocracia, más velocidad en cada gestión.",
  },
  {
    icon: buscar,
    alt: "icono buscar",
    className: "w-14 h-14",
    text: "Detectamos oportunidades reales en origen y producto.",
  },
  {
    icon: ganancia,
    alt: "icono ganancia",
    className: "w-14 h-14",
    text: "Optimizamos tu logística para impulsar mayor rentabilidad.",
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
    <section className="bg-gradient-to-br from-[#0C0C1C] to-[#13182C] py-16 px-6 scroll-mt-[4.25rem]" id="benefits">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-left perspective">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="benefit-card opacity-0 rotateY-90 flex flex-col items-center sm:items-start text-center sm:text-left gap-4 transition-transform duration-700 ease-out"
          >
            <OptimizedImage
              src={benefit.icon}
              alt={benefit.alt}
              width={56}
              height={56}
              sizes="56px"
              loading="lazy"
              className={`${benefit.className} select-none`}
            />
            <p className="text-white text-base sm:text-sm md:text-base 2xl:text-lg leading-relaxed min-h-[4.5rem] max-w-[20rem] mt-2">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;