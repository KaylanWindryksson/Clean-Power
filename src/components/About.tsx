import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="h-6 w-6" />,
      value: "10+",
      label: "Anos de Experiência"
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "5000+",
      label: "Clientes Atendidos"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "5hrs",
      label: "Prazo de Entrega"
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      value: "100%",
      label: "Satisfação Garantida"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sobre a CleanPower
          </h2>
          <p className="text-xl text-gray-600">
            Há mais de uma década, somos referência em higienização profissional, 
            trazendo vida nova aos ambientes e garantindo o máximo de qualidade em cada serviço.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Nossa História</h3>
            <p className="text-gray-600">
            Somos especialistas em limpeza e impermeabilização de estofados.
            Nossa empresa está situada na cidade de Muriaé , atendendo também cidades vizinhas.
            Nossa missão é oferecer serviços de qualidade e com garantia de satisfação dos nossos clientes. Nossa proposta de valor é oferecer praticidade, comodidade e executar os processos com equipamentos de última geração e produtos específicos para cada tipo de serviço.
            </p>
            <p className="text-gray-600">
              Nossa equipe altamente treinada utiliza tecnologia de ponta e produtos 
              certificados, garantindo resultados excepcionais em cada serviço realizado.
            </p>
            <div className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Conheça Nossos Serviços
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-blue-600 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;