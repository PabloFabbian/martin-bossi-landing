import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const images = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    "https://images.unsplash.com/photo-1608889825103-eb5a6f5adf58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    "https://images.unsplash.com/photo-1600271886742-f049cd5b8a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const loaded = await Promise.all(
        images.map(src => {
          return new Promise(resolve => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
          });
        })
      );
      setLoadedImages(loaded.filter(Boolean));
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (loadedImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % loadedImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [loadedImages]);

  if (loadedImages.length === 0) {
    return (
      <div className="text-center text-white">Cargando imágenes...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Imagen con transición */}
      <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden rounded-lg scale-90 border border-[#023E7D]/40">
        {loadedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slider ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Texto y botón */}
      <div className="w-full md:w-1/2 text-white space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Cotizá hoy. Importá sin <br className="hidden md:block" /> complicaciones.
        </h2>
        <p className="text-[#D1D5DB]">
          Importamos maquinaria, repuestos, insumos, productos y materia prima con eficiencia y seguimiento profesional.
        </p>
        
        {/* Indicadores */}
        <div className="flex gap-2 pt-4">
          {loadedImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentImage ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;