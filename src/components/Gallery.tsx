import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Sofá antes e depois"
    },
    {
      url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Limpeza de poltrona"
    },
    {
      url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Higienização de colchão"
    },
    {
      url: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Limpeza de tapete"
    },
    {
      url: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Estofado automotivo"
    },
    {
      url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Cadeiras de escritório"
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