'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Plans() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
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
      }
    });
  }, []);

  return (
    <section className="bg-slate-800 py-20 px-6" id="planes">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-4xl font-black text-white text-center mb-4">
          Planes Estratégicos para Impulsar tu Negocio
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 - Despegue Estratégico */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="animate-card bg-slate-700 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">Despegue Estratégico</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-black text-white">$899.000</span>
              <div className="text-sm text-gray-400">COP</div>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Sesión 1:1 de diagnóstico estratégico (60 min)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Auditoría exprés de tu presencia digital actual</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Guía de acción personalizada con próximos pasos</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Recomendaciones de herramientas digitales y de IA</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Acceso a una plantilla exclusiva para estructurar tu oferta</span>
              </li>
            </ul>
            <button
              onClick={() => window.open('https://mpago.li/1La11v8', '_blank')}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 mb-4 cursor-pointer hover:scale-105"
            >
              ADQUIRIR PLAN
            </button>
            <div className="text-center">
              <a 
                href="https://wa.me/573002278962?text=Hola%20Ronald,%20tengo%20una%20pregunta%20sobre%20el%20plan%20Despegue%20Estratégico" 
                className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 cursor-pointer hover:scale-105 inline-block"
              >
                ¿Tienes alguna pregunta?
              </a>
            </div>
          </div>

          {/* Plan 2 - Marca con Rumbo (Destacado) */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className="animate-card bg-slate-700 p-8 rounded-lg relative border-2 border-cyan-400"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-slate-800 px-4 py-1 rounded-full text-sm font-bold">
              Más Popular
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">Marca con Rumbo</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-black text-white">$1.499.999</span>
              <div className="text-sm text-gray-400">COP</div>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Consultoría de branding y tono de marca</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Boceto estratégico de sitio web (wireframe + estructura)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Revisión de identidad visual (colores, tipografía, logo)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Roadmap de contenidos y estrategia de visibilidad</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Recomendaciones de IA para optimizar procesos creativos</span>
              </li>
            </ul>
            <button
              onClick={() => window.open('https://mpago.li/1nFLPLW', '_blank')}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 mb-4 cursor-pointer hover:scale-105"
            >
              ADQUIRIR PLAN
            </button>
            <div className="text-center">
              <a 
                href="https://wa.me/573002278962?text=Hola%20Ronald,%20tengo%20una%20pregunta%20sobre%20el%20plan%20Marca%20con%20Rumbo" 
                className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 cursor-pointer hover:scale-105 inline-block"
              >
                ¿Tienes alguna pregunta?
              </a>
            </div>
          </div>

          {/* Plan 3 - Ecosistema Digital Pro (Ahora ACTIVO) */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            className="animate-card bg-slate-700 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">Ecosistema Digital Pro</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-black text-white">$1.699.999</span>
              <div className="text-sm text-gray-400">COP</div>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Desarrollo completo de sitio web personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Consultoría estratégica + asesoría mensual</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Integración con WhatsApp, formularios y CRM básico</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Diseño de branding completo</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-sm">Automatización básica con herramientas de IA</span>
              </li>
            </ul>
            <button
              onClick={() => window.open('https://mpago.li/1nFLPLW', '_blank')}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 mb-4 cursor-pointer hover:scale-105"
            >
              ADQUIRIR PLAN
            </button>
            <div className="text-center">
              <a 
                href="https://wa.me/573002278962?text=Hola%20Ronald,%20tengo%20una%20pregunta%20sobre%20el%20plan%20Ecosistema%20Digital%20Pro" 
                className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 cursor-pointer hover:scale-105 inline-block"
              >
                ¿Tienes alguna pregunta?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}