
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.', {
        position: 'top-center',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

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

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-olher-light/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olher-dark font-heading mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-olher-blue mx-auto mb-6"></div>
          <p className="text-lg text-olher-dark/80">
            Estamos prontos para atender você e cuidar da saúde dos seus olhos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-olher-dark font-heading mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
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

              <div className="mt-8">
                <h4 className="text-lg font-medium text-olher-dark mb-4">Localização</h4>
                <div className="rounded-lg overflow-hidden h-[200px] border border-olher-light">
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
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-olher-dark font-heading mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-olher-dark mb-1">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-olher-light rounded-lg focus:outline-none focus:ring-2 focus:ring-olher-blue/50 focus:border-olher-blue transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-olher-dark mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-olher-light rounded-lg focus:outline-none focus:ring-2 focus:ring-olher-blue/50 focus:border-olher-blue transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-olher-dark mb-1">
                      Telefone
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-olher-light rounded-lg focus:outline-none focus:ring-2 focus:ring-olher-blue/50 focus:border-olher-blue transition-colors"
                      placeholder="(44) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-olher-dark mb-1">
                    Mensagem
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-olher-light rounded-lg focus:outline-none focus:ring-2 focus:ring-olher-blue/50 focus:border-olher-blue transition-colors"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary w-full flex items-center justify-center",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  )}
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
