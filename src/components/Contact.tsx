import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      details: "Av. Colombo, 5790 - Zona 7, Maringá - PR"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      details: "(44) 3025-5500"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "contato@olher.com.br"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horário",
      details: "Segunda a sexta: 8h às 18h | Sábado: 8h às 12h"
    }
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Phone className="h-6 w-6" />,
      link: "https://api.whatsapp.com/send?phone=5544999999999&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      link: "https://facebook.com/olherclinica",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      link: "https://instagram.com/olherclinica",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      link: "mailto:contato@olher.com.br",
      color: "bg-blue-500 hover:bg-blue-600"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-olher-light/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olher-dark font-heading mb-4 gradient-text">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-olher-blue mx-auto mb-6"></div>
          <p className="text-lg text-olher-dark/80 fade-in">
            Estamos prontos para atender você e cuidar da saúde dos seus olhos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="slide-in-left">
            <div className="bg-white rounded-xl shadow-md p-8 h-full shine-effect">
              <h3 className="text-2xl font-bold text-olher-dark font-heading mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6 stagger-children">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 hover-card rounded-lg p-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-olher-blue/10 rounded-full flex items-center justify-center text-olher-blue">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-olher-dark">{info.title}</h4>
                      <p className="text-olher-dark/70">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-olher-dark font-heading mb-6">
                  Nossas Redes Sociais
                </h3>
                <div className="flex flex-wrap gap-4 stagger-children">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      <Button
                        className={cn(
                          "text-white social-btn",
                          social.color
                        )}
                      >
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <div className="bg-white rounded-xl shadow-md p-8 h-full shine-effect">
              <h3 className="text-2xl font-bold text-olher-dark font-heading mb-6">
                Localização
              </h3>
              <div className="rounded-lg overflow-hidden h-[400px] border border-olher-light hover-card">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.3096015737046!2d-51.9379369!3d-23.4103039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0ecd36841af%3A0xf29aef6e624e1ee9!2sAv.%20Colombo%2C%205790%20-%20Zona%207%2C%20Maring%C3%A1%20-%20PR%2C%2087020-900!5e0!3m2!1spt-BR!2sbr!4v1715705231182!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="https://www.google.com/maps/dir//Av.+Colombo,+5790+-+Zona+7,+Maringá+-+PR,+87020-900" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Button variant="outline" className="border-olher-blue text-olher-blue hover:bg-olher-blue/10 pulse-animation">
                    Como chegar
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
