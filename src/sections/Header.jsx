import Icon from '../assets/isologo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:py-1.5 2xl:py-4 shadow-md rounded-b-3xl z-50 bg-white/80 backdrop-blur">
      <img src={Icon} alt="Logo Bossi SRL" className="h-12" />
      <nav className="hidden md:flex text-xs space-x-6">
        <a href="#inicio" className="text-gray-700 hover:text-black">Nosotros</a>
        <a href="#servicios" className="text-gray-700 hover:text-black">Servicios</a>
        <a href="#beneficios" className="text-[#FFAE2B]/80 hover:text-[#FFAE2B]">Cotizá tu operación</a>
        <a href="#contacto" className="text-gray-700 hover:text-black">Contacto</a>
        <a href="#contacto" className="text-gray-700 hover:text-black">FAQ's</a>
      </nav>
      <button className="bg-gradient-to-r from-[#035EBB] to-[#002052] text-white px-4 py-2 rounded-full hover:opacity-90 transition font-semibold text-xs">
        Iniciar
      </button>
    </header>
  );
};

export default Header;