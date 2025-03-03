import React, { useState } from 'react';
import { Droplet, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <img 
          src="https://i.imgur.com/5vWUyQs.png" 
          alt="Logo" 
          className="object-contain" 
          style={{ width: "100px", height: "100px" }}
        />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Início</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
          <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium">Processo</a>
          <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium">Galeria</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Depoimentos</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Processo
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;