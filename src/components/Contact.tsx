import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS service configuration
    // You'll need to replace these IDs with your actual EmailJS account details
    const serviceID = '516079542576-vgsl23q1esl'; // Replace with your EmailJS service ID
    const templateID = 'template_v4e1q5p'; // Replace with your EmailJS template ID
    const userID = 'U3bBDK1w-ox2m_ZlU'; // Replace with your EmailJS user ID
    
    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      service: formData.service,
      message: formData.message
    };
    
    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({
          submitted: true,
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus({
          submitted: true,
          success: false,
          message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato por telefone.'
        });
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Telefone</h4>
                  <p className="text-gray-600">(32) 99906-7654</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">samuelvasconcelos.sg@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Muriaé - MG</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Horário de Atendimento</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Segunda - Sexta:</div>
                  <div className="font-medium text-gray-800">8:00 - 18:00</div>
                  
                  <div className="text-gray-600">Sábado:</div>
                  <div className="font-medium text-gray-800">9:00 - 14:00</div>
                  
                  <div className="text-gray-600">Domingo:</div>
                  <div className="font-medium text-gray-800">Fechado</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h3>
            
            {status.submitted && (
              <div className={`mb-6 p-4 rounded-md ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Serviço Desejado</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="sofa">Sofás e Poltronas</option>
                    <option value="mattress">Colchões</option>
                    <option value="car">Estofados Automotivos</option>
                    <option value="office">Escritórios</option>
                    <option value="carpet">Tapetes e Carpetes</option>
                    <option value="protection">Impermeabilização</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;