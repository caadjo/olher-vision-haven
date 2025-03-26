
import React from 'react';
import { Eye, ShieldPlus, Glasses, Microscope, PencilRuler, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Consultas Oftalmológicas",
      description: "Exames completos realizados por especialistas para avaliar a saúde dos seus olhos."
    },
    {
      icon: <Glasses className="h-6 w-6" />,
      title: "Prescrição de Óculos",
      description: "Avaliação precisa para correção visual com tecnologia de ponta."
    },
    {
      icon: <ShieldPlus className="h-6 w-6" />,
      title: "Tratamento de Doenças",
      description: "Diagnóstico e tratamento de glaucoma, catarata, degeneração macular, entre outras."
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Cirurgias Oftalmológicas",
      description: "Procedimentos com o máximo de precisão e segurança para recuperação da visão."
    },
    {
      icon: <PencilRuler className="h-6 w-6" />,
      title: "Adaptação de Lentes",
      description: "Especialistas em lentes de contato para diferentes necessidades visuais."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Neuro-Oftalmologia",
      description: "Avaliação especializada da relação entre o sistema nervoso e a visão."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olher-dark font-heading mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-olher-blue mx-auto mb-6"></div>
          <p className="text-lg text-olher-dark/80">
            Oferecemos uma gama completa de serviços oftalmológicos com a mais alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6 rounded-xl hover-card border border-olher-light",
                "transition-all duration-500 group",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-olher-light rounded-lg flex items-center justify-center mb-4 text-olher-blue group-hover:bg-olher-blue group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-olher-dark mb-3 font-heading">
                {service.title}
              </h3>
              <p className="text-olher-dark/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="btn-primary mx-auto"
          >
            Agende sua consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
