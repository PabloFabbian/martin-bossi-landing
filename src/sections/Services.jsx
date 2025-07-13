const services = [
  {
    title: 'Importación de Maquinaria',
    description: 'Traemos equipos pesados desde cualquier parte del mundo.',
    icon: '/icons/maquinaria.svg',
  },
  {
    title: 'Suministros Industriales',
    description: 'Insumos y repuestos para mantener tu producción activa.',
    icon: '/icons/suministros.svg',
  },
  {
    title: 'Materias Primas',
    description: 'Importamos los materiales necesarios para tu industria.',
    icon: '/icons/materias-primas.svg',
  },
];

const Services = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(({ title, description, icon }) => (
          <div key={title} className="p-6 rounded-lg border shadow hover:shadow-lg transition">
            <img src={icon} alt={title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};