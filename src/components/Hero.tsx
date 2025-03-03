import React from 'react';
import { PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-blue-600 text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div 
        className="relative z-10 min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/fotos-gratis/homem-fazendo-servico-profissional-de-limpeza-domestica_23-2150359024.jpg?t=st=1741008946~exp=1741012546~hmac=4642cef6cc90f04e92e7a6e0d8589efea2b54c4444f86b3130cc4bd87acc153b&w=1060')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Higienização Profissional de Estofados
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Revitalize seus móveis com nossa limpeza profunda e especializada. Removemos manchas, ácaros e bactérias, devolvendo vida e higiene aos seus estofados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="https://w.app/svalzg" target = "_blank" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                (32) 99906-7654
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;