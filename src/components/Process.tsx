import React from 'react';
import { Search, Droplets, Wind, Shield } from 'lucide-react';

const ProcessStep = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-3">
          <div className="mr-3 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: <Search className="h-6 w-6" />,
      title: "Inspeção e Análise",
      description: "Avaliamos o tipo de estofado, material, manchas e nível de sujidade para determinar o melhor método de limpeza."
    },
    {
      number: 2,
      icon: <Droplets className="h-6 w-6" />,
      title: "Aplicação de Produtos",
      description: "Utilizamos produtos específicos para cada tipo de tecido e sujeira, garantindo eficácia sem danificar o material."
    },
    {
      number: 3,
      icon: <Wind className="h-6 w-6" />,
      title: "Extração e Secagem",
      description: "Com equipamentos de alta potência, extraímos toda a sujeira e umidade, acelerando o processo de secagem."
    },
    {
      number: 4,
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Final",
      description: "Aplicamos protetor que cria uma barreira invisível contra manchas e facilita a manutenção diária."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nosso Processo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos um método comprovado em 4 etapas para garantir resultados excepcionais
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;