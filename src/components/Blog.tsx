import React from 'react';
import BlurImage from './ui/BlurImage';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "De um pequeno consultório a uma referência em saúde",
      content: `A Clínica Olher nasceu em 2008, quando os médicos Roberto e Maria Silva decidiram criar um espaço que combinasse excelência médica com atendimento humanizado. O que começou como um pequeno consultório na Avenida Paulista, hoje é uma clínica completa que atende milhares de pacientes anualmente.

Ao longo desses anos, expandimos nossas instalações, ampliamos nossa equipe de especialistas e incorporamos tecnologias de ponta, sempre mantendo nosso compromisso com o cuidado personalizado e a medicina preventiva.`,
      image: "/images/blog/clinic-history.jpg",
      date: "15 de Março, 2024"
    },
    {
      id: 2,
      title: "Inovação e tecnologia a serviço da sua visão",
      content: `Em nossa busca constante pela excelência, a Clínica Olher investe continuamente em tecnologia de ponta e na capacitação de nossa equipe. Nosso centro cirúrgico é equipado com os mais modernos equipamentos para cirurgias oftalmológicas, permitindo procedimentos mais precisos e seguros.

Acreditamos que a combinação entre tecnologia avançada e profissionais altamente qualificados é fundamental para oferecer o melhor tratamento possível aos nossos pacientes.`,
      image: "/images/blog/innovation.jpg",
      date: "10 de Março, 2024"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-olher-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olher-dark font-heading mb-4 gradient-text">
            Conheça nossa história
          </h2>
          <div className="w-24 h-1 bg-olher-blue mx-auto mb-6"></div>
          <p className="text-lg text-olher-dark/80 fade-in">
            Acompanhe nossa jornada e descubra como nos tornamos referência em oftalmologia
          </p>
        </div>

        <div className="space-y-20">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
              }`}
            >
              <div className={`${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}>
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl shine-effect">
                  <BlurImage 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={`${
                index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'
              }`}>
                <div className="space-y-4">
                  <span className="text-sm text-olher-blue font-medium">
                    {post.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-olher-dark">
                    <span className="text-olher-blue">De um </span>
                    pequeno consultório
                    <span className="text-olher-blue"> a uma</span>
                    <br />
                    referência em saúde
                  </h3>
                  <div className="prose prose-lg text-olher-dark/80 max-w-none">
                    {post.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;