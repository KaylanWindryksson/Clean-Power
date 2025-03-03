import React from 'react';
import { Sofa, Bed, Car, Briefcase, Home, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Sofa className="h-8 w-8 text-blue-600" />,
      title: "Sofás e Poltronas",
      description: "Limpeza profunda de sofás e poltronas, removendo manchas, odores e ácaros, prolongando a vida útil do seu mobiliário."
    },
    {
      icon: <Bed className="h-8 w-8 text-blue-600" />,
      title: "Colchões",
      description: "Higienização especializada para colchões, eliminando ácaros, fungos e bactérias para um sono mais saudável."
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Estofados Automotivos",
      description: "Limpeza e higienização de bancos e forros de veículos, removendo manchas e odores indesejados."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Escritórios",
      description: "Serviços para ambientes corporativos, mantendo cadeiras e divisórias limpas e higienizadas."
    },
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Tapetes e Carpetes",
      description: "Limpeza profunda de tapetes e carpetes, removendo sujeira acumulada e revitalizando as fibras."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Impermeabilização",
      description: "Aplicação de produtos especiais que protegem seus estofados contra líquidos e manchas."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de higienização para diversos tipos de estofados e superfícies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;