'use client';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    // Animación simple de contadores
    const timer1 = setInterval(() => {
      setExperienceCount(prev => prev < 15 ? prev + 1 : 15);
    }, 100);

    const timer2 = setInterval(() => {
      setProjectsCount(prev => prev < 100 ? prev + 5 : 100);
    }, 50);

    setTimeout(() => {
      clearInterval(timer1);
      clearInterval(timer2);
    }, 2000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section className="bg-slate-700 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-black text-white mb-6">
            Mi Misión es Verte Crecer
          </h2>
          
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Llevo más de 15 años acompañando a marcas, personas y proyectos a encontrar su voz en el mundo digital. No creo en las fórmulas mágicas, creo en el poder de una estrategia bien pensada, en la autenticidad y en las conexiones reales.
          </p>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Soy comunicador de esencia, creativo por naturaleza y un apasionado de ayudar a otros a crecer. Si estás listo para llevar tu negocio al siguiente nivel, estoy aquí para guiarte con claridad, experiencia y corazón.
          </p>
          
          <a 
            href="https://wa.me/573002278962?text=Hola%20Ronald,%20acabo%20de%20leer%20sobre%20ti%20y%20quiero%20que%20hablemos." 
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            TE PUEDO ATENDER AHORA MISMO
          </a>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-4xl font-black text-cyan-400 mb-2">{experienceCount}+</div>
              <div className="text-sm text-gray-400">Años de experiencia</div>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-4xl font-black text-cyan-400 mb-2">{projectsCount}+</div>
              <div className="text-sm text-gray-400">Proyectos exitosos</div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <img 
            src="/ronald-about.webp" 
            alt="Ronald Rangel" 
            className="w-80 h-80 rounded-full object-cover shadow-2xl hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}