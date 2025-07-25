import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageCarousel from '../components/service_section/ImageCarousel';
import ServiceFeatures from '../components/service_section/ServiceFeatures';
import SectionHeader from '../components/service_section/SectionHeader';
import GradientButton from '../components/GradientButton';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionRef = useRef(null);

  const features = [
    { title: 'Importación Integral', description: 'Maquinaria, repuestos, insumos' },
    { title: 'Seguimiento Profesional', description: 'Monitoreo completo' },
    { title: 'Proceso Eficiente', description: 'Optimización de tiempos' },
    { title: 'Alcance Global', description: 'Conexiones internacionales' },
  ];

  const images = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1608889825103-eb5a6f5adf58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1600271886742-f049cd5b8a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
  ];

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-[#0b0c1c] via-[#012141] to-[#050f24] pt-20 pb-12 px-6"
    >
      <div className="max-w-6xl mx-auto"
      ref={sectionRef}>
        <SectionHeader
          label="Servicios"
          title={
            <>
              Soluciones de importación <span className="text-[#0466C8]">integrales</span>
            </>
          }
          subtitle="Especialistas en gestión aduanera y comercio internacional"
        />

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <ImageCarousel images={images} />
          <div className="w-full lg:w-1/2">
            <ServiceFeatures features={features} />
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton className="px-6 py-3 text-xs font-semibold">
                Solicitá tu cotización
              </GradientButton>
              <button className="text-[#979DAC] hover:text-white px-5 py-2 rounded-3xl border border-[#0353A4] hover:border-[#00A6D6] text-sm font-medium transition-colors">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;