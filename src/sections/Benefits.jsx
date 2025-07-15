const benefits = [
  { icon: '/icons/seguridad.svg', title: 'Seguridad', description: 'Procesos seguros y transparentes.' },
  { icon: '/icons/eficiencia.svg', title: 'Eficiencia', description: 'Logística optimizada para ahorrar tiempo.' },
  { icon: '/icons/expertos.svg', title: 'Expertos', description: 'Equipo con experiencia internacional.' },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">¿Por qué elegirnos?</h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {benefits.map(({ icon, title, description }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;