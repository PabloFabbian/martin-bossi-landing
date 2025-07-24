import React, { useState, useEffect } from 'react';

const ServicesPage = () => {
  const features = [
    { title: "Importación Integral", description: "Maquinaria, repuestos, insumos" },
    { title: "Seguimiento Profesional", description: "Monitoreo completo" },
    { title: "Proceso Eficiente", description: "Optimización de tiempos" },
    { title: "Alcance Global", description: "Conexiones internacionales" }
  ];

  const images = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    "https://images.unsplash.com/photo-1608889825103-eb5a6f5adf58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    "https://images.unsplash.com/photo-1600271886742-f049cd5b8a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        images.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
          });
        })
      );
      setLoadedImages(loaded.filter(Boolean));
    };

    loadImages();
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
      <section className="bg-[#001233] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center py-20">
          <p className="text-[#7D8597]">Cargando servicios...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#012141] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#0468C8] text-sm uppercase mb-3 tracking-wider">Servicios</p>
          <h2 className="text-2xl md:text-3xl text-white font-medium mb-2">
            Soluciones de importación <span className="text-[#00A6D6]">integrales</span>
          </h2>
          <p className="text-[#7D8597] max-w-xl mx-auto">
            Especialistas en gestión aduanera y comercio internacional
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/5 h-64 md:h-70 relative overflow-hidden mx-auto rounded-lg border border-[#023E7D]/30 bg-[#001645]/50">
            {loadedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Logística internacional"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23001233'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' fill='%237D8597' text-anchor='middle' dominant-baseline='middle'%3EImagen no disponible%3C/text%3E%3C/svg%3E";
                }}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#001233]/50">
              <div 
                className="h-full bg-[#00A6D6] transition-all duration-5000 ease-linear"
                style={{ width: `${(currentImage + 1) * (100/loadedImages.length)}%` }}
              ></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#001645]/40 p-3 rounded-lg border border-[#023E7D]/20 hover:border-[#00A6D6]/40 transition-colors"
                >
                  <h3 className="text-white font-medium text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-[#5C677D] text-xs md:text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-[#0468C8] hover:bg-[#0353A4] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg">
                Solicitar cotización
              </button>
              <button className="text-[#979DAC] hover:text-white px-5 py-2 rounded-lg border border-[#023E7D] hover:border-[#00A6D6] text-sm font-medium transition-colors">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  export default ServicesPage;