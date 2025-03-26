
import React from 'react';
import { Heart, CheckCircle2, Award } from 'lucide-react';
import BlurImage from './ui/BlurImage';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-olher-blue" />,
      title: "Cuidado Humanizado",
      description: "Tratamos cada paciente com empatia e atenção personalizada."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-olher-blue" />,
      title: "Excelência Técnica",
      description: "Investimos continuamente em tecnologia e capacitação profissional."
    },
    {
      icon: <Award className="w-6 h-6 text-olher-blue" />,
      title: "Compromisso com Resultados",
      description: "Focamos em soluções efetivas para a saúde visual de nossos pacientes."
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-olher-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olher-dark font-heading mb-4">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-olher-blue mx-auto mb-6"></div>
          <p className="text-lg text-olher-dark/80">
            Há mais de 10 anos cuidando da saúde ocular dos maringaenses com excelência e dedicação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <BlurImage 
                src="https://images.unsplash.com/photo-1593444285730-d3d457361cce?q=80&w=900&auto=format&fit=crop"
                alt="Equipe Olher"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-5 rounded-xl shadow-lg max-w-[220px]">
              <p className="text-olher-dark font-medium">
                "Nosso compromisso é oferecer a melhor experiência em cuidados oftalmológicos."
              </p>
              <p className="text-sm text-olher-dark/70 mt-2">
                — Dr. Carlos Olher, Fundador
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-olher-dark font-heading mb-6">
              Nossa Missão
            </h3>
            <p className="text-olher-dark/80 mb-8">
              Na Olher, temos como missão proporcionar a melhor experiência em cuidados oftalmológicos, 
              combinando tecnologia de ponta, atendimento humanizado e profissionais altamente qualificados 
              para garantir a saúde ocular e bem-estar de nossos pacientes.
            </p>
            
            <h3 className="text-2xl font-bold text-olher-dark font-heading mb-6">
              Nossos Valores
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 hover-card p-4 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-olher-blue/10 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-olher-dark mb-1">{value.title}</h4>
                    <p className="text-olher-dark/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
