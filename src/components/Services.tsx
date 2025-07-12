'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const handleMouseEnter = () => {
          gsap.to(card, {
            duration: 0.3,
            boxShadow: "0 0 0 2px #06b6d4",
            scale: 1.02,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            duration: 0.3,
            boxShadow: "0 0 0 0px #06b6d4",
            scale: 1,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  const services = [
    {
      icon: "/icon-web.webp",
      title: "Desarrollo Web Estratégico",
      description: "Diseño y construyo sitios web con enfoque en resultados. Tu página será tu mejor vendedor, alineada a tus objetivos y pensada para convertir.",
      whatsappText: "Hola Ronald, me interesa el servicio de Desarrollo Web Estratégico"
    },
    {
      icon: "/icon-branding.webp", 
      title: "Branding con Propósito",
      description: "Tu marca debe contar tu historia, reflejar tus valores y conectar emocionalmente. Te ayudo a definir una identidad sólida, coherente y memorable.",
      whatsappText: "Hola Ronald, me interesa el servicio de Branding con Propósito"
    },
    {
      icon: "/icon-marketing.webp",
      title: "Marketing Digital Inteligente", 
      description: "Estrategias hechas a medida. Combino creatividad, datos y automatización para ayudarte a crecer en redes, captar leads y aumentar tus ventas.",
      whatsappText: "Hola Ronald, me interesa el servicio de Marketing Digital Inteligente"
    },
    {
      icon: "/icon-ai.webp",
      title: "Asesoría en IA Aplicada",
      description: "La IA ya no es el futuro, es el presente. Te enseño a aprovecharla para optimizar tu negocio, crear contenido más rápido y tomar mejores decisiones.",
      whatsappText: "Hola Ronald, me interesa el servicio de Asesoría en IA Aplicada"
    }
  ];

  const handleServiceClick = (whatsappText: string) => {
    const url = `https://wa.me/573002278962?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="bg-slate-700 py-20 px-6" id="servicios">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-4xl font-black text-white text-center mb-4">
          ¿En qué puedo ayudarte?
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="animate-card bg-slate-800 p-8 rounded-lg text-center transition-all duration-300"
            >
              <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-6 flex items-center justify-center p-4 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button 
                onClick={() => handleServiceClick(service.whatsappText)}
                className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer hover:scale-105"
              >
                LO QUIERO
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}