import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "https://i.imgur.com/YLv9v8N.png",
      title: "Sofá"
    },
    {
      url: "https://i.imgur.com/nilaHzc.png",
      title: "Limpeza de Cadeiras"
    },
    {
      url: "https://i.imgur.com/stHNRpC.png",
      title: "Higienização de colchão"
    },
    {
      url: "https://i.imgur.com/WySG6T0.png",
      title: "Limpeza de tapete"
    },
    {
      url: "https://i.imgur.com/4hIPzFa.png",
      title: "Estofado automotivo"
    },
    {
      url: "https://i.imgur.com/UdzoTea.png",
      title: "Impermeabilização"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Galeria de Trabalhos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns exemplos de nossos serviços de higienização
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-medium p-4">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => navigateImage(-1)}
            disabled={selectedImage === 0}
          >
            <ChevronLeft size={48} />
          </button>
          
          <img 
            src={images[selectedImage].url} 
            alt={images[selectedImage].title} 
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />
          
          <button 
            className="absolute right-4 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => navigateImage(1)}
            disabled={selectedImage === images.length - 1}
          >
            <ChevronRight size={48} />
          </button>
          
          <p className="absolute bottom-4 text-white text-center w-full">
            {images[selectedImage].title}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;