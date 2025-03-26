
import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import BlurImage from './ui/BlurImage';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden relative bg-gradient-to-b from-olher-light/50 to-white"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[25%] -right-[25%] w-1/2 h-3/4 bg-olher-sky/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[25%] -left-[25%] w-1/2 h-3/4 bg-olher-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-olher-blue/10 text-olher-blue text-sm font-medium mb-6">
              <Eye size={16} className="mr-2" /> Cuidando da sua visão como ninguém
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-olher-dark font-heading mb-6 leading-tight">
              Excelência em <span className="text-olher-blue">saúde ocular</span> em Maringá
            </h1>
            
            <p className="text-lg text-olher-dark/80 mb-8 max-w-xl leading-relaxed">
              Na Olher, oferecemos atendimento especializado e personalizado para cuidar da saúde dos seus olhos com tecnologia de ponta e profissionais altamente qualificados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Agende sua consulta
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#services" className="btn-outline">
                Nossos serviços
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <BlurImage 
                src="https://images.unsplash.com/photo-1584036553516-bf83c3ac8dbd?q=80&w=1000&auto=format&fit=crop"
                alt="Exame oftalmológico moderno"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden shadow-lg bg-white p-2 animate-float">
              <BlurImage 
                src="https://images.unsplash.com/photo-1586253634026-8cb574908d1c?q=80&w=300&auto=format&fit=crop"
                alt="Teste de visão"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 glass p-4 rounded-lg shadow-lg max-w-[200px] animate-float">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-olher-blue/10 rounded-full flex items-center justify-center">
                  <Eye size={20} className="text-olher-blue" />
                </div>
                <span className="ml-2 font-medium text-olher-dark">100%</span>
              </div>
              <p className="text-sm text-olher-dark/70">Satisfação dos nossos pacientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
