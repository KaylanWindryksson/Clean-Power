import React from 'react';
import { Droplet, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
            src="https://i.imgur.com/5vWUyQs.png" 
            alt="Logo" 
            className="object-contain" 
            style={{ width: "100px", height: "100px" }}
              />
              <span className="text-xl font-bold">CleanPower</span>
            </div>
            <p className="text-gray-400 mb-4">
              Especialista em higienização profissional de estofados, com mais de 10 anos de experiência no mercado.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/cleanpowermuriae" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cleanpowermuriae/" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Processo</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Sofás e Poltronas</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Colchões</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Estofados Automotivos</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Escritórios</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Tapetes e Carpetes</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Impermeabilização</a></li>
            </ul>
          </div>
          
          {/* Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Áreas Atendidas</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Muriaé - MG</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CleanPower. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;