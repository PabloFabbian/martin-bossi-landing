const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <img src="/logo.png" alt="Logo Bossi SRL" className="h-10" />
      <nav className="hidden md:flex space-x-6">
        <a href="#inicio" className="text-gray-700 hover:text-black">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Cotizá tu operación</button>
    </header>
  );
};