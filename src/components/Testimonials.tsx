import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, location, rating, text, date }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold text-lg text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </div>
      <div className="mb-4 relative">
        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100 rotate-180" />
        <p className="text-gray-600 relative z-10 pl-4">{text}</p>
      </div>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      location: "Muriaé-MG",
      rating: 5,
      text: "Serviço excelente! Meu sofá estava com manchas que eu achava impossíveis de remover, e ficou como novo. Recomendo muito!",
      date: "15/03/2025"
    },
    {
      name: "Carlos Oliveira",
      location: "Muriaé-MG",
      rating: 5,
      text: "Profissionais pontuais e muito educados. A higienização do meu colchão eliminou completamente os ácaros que causavam alergia na minha filha.",
      date: "02/02/2025"
    },
    {
      name: "Mariana Costa",
      location: "Muriaé-MG",
      rating: 4,
      text: "Contratei para limpar os bancos do meu carro que estavam muito manchados. O resultado foi surpreendente, parece que troquei o estofado!",
      date: "20/01/2025"
    },
    {
      name: "Roberto Almeida",
      location: "Muriaé-MG",
      rating: 5,
      text: "Já é a terceira vez que contrato o serviço para meu escritório. As cadeiras sempre ficam impecáveis e o cheiro é muito agradável.",
      date: "05/12/2024"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Depoimentos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              date={testimonial.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;