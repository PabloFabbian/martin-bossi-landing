import React from 'react';
import ScrollStack from '../components/ScrollStack';
import ServiceCard from '../components/ServiceCard';
import ImageSlider from '../components/ImageSlider';
import { useLenis } from '../hooks/useLenis';
import { servicesData } from '../data/servicesData';

const ServicesPage = () => {
  // Inicializar smooth scroll con Lenis
  useLenis();

  return (
    <div className="bg-[#012040]">
      {/* Sección del slider */}
      <section className="py-20 px-6 md:px-16">
        <ImageSlider />
      </section>

      {/* Sección de servicios con scroll stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollStack className="min-h-screen">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </ScrollStack>

          {/* Sección final */}
          <div className="text-center text-white mt-16">
            <p className="text-[#D1D5DB] mb-6">
              Contáctanos y descubrí cómo podemos facilitar cada paso de tu operación.
            </p>
            <button className="bg-gradient-to-r from-[#3A7DFF] to-[#001E99] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
              Cotizar ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;