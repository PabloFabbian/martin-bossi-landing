const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: 'url(/images/imagen-destacada.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Importamos lo que tu negocio necesita</h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">Soluciones de importación eficientes y seguras para tu empresa.</p>
        <button className="mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">Cotizá ahora</button>
      </div>
    </section>
  );
};