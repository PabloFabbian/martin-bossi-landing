import React from "react";
import GradientButton from "../components/GradientButton";

const ContactCTA = () => {
  return (
    <section className="bg-[#050F24] text-white text-center py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-medium mb-4">¡Contáctanos hoy!</h1>
      <h2 className="text-3xl md:text-5xl font-medium mb-6">Tu solución logística</h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto mb-10">
        Descubre cómo podemos facilitar tus operaciones de comercio exterior y optimizar tu logística internacional.
      </p>
      <GradientButton className="px-8 py-3 text-base font-medium">
        Consultanos
      </GradientButton>
    </section>
  );
};

export default ContactCTA;