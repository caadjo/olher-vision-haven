
import React from 'react';
import { Eye, ArrowUp, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-olher-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye size={24} className="text-olher-blue" />
              <span className="text-2xl font-bold font-heading">Olher</span>
            </div>
            <p className="text-gray-300 mb-6">
              Excelência em saúde ocular em Maringá, oferecendo serviços oftalmológicos completos e de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-olher-navy/50 hover:bg-olher-blue transition-colors rounded-full flex items-center justify-center">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-olher-navy/50 hover:bg-olher-blue transition-colors rounded-full flex items-center justify-center">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-olher-navy/50 hover:bg-olher-blue transition-colors rounded-full flex items-center justify-center">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5 font-heading">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Principal</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5 font-heading">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Consultas Oftalmológicas</li>
              <li className="text-gray-300">Prescrição de Óculos</li>
              <li className="text-gray-300">Tratamento de Doenças</li>
              <li className="text-gray-300">Cirurgias Oftalmológicas</li>
              <li className="text-gray-300">Adaptação de Lentes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5 font-heading">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-olher-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Av. Colombo, 5790 - Zona 7, Maringá - PR</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-olher-blue mr-3 flex-shrink-0" />
                <span className="text-gray-300">(44) 3025-5500</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-olher-blue mr-3 flex-shrink-0" />
                <span className="text-gray-300">contato@olher.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-olher-navy/50 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Olher. Todos os direitos reservados.
          </p>
          <a 
            href="#home" 
            className="flex items-center justify-center w-10 h-10 bg-olher-blue rounded-full transition-transform hover:translate-y-[-5px]"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
