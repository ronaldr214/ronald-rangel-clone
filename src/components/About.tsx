'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const statsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (statsRef.current && experienceRef.current && projectsRef.current) {
      // Configurar la animación inicial - números ocultos
      gsap.set([experienceRef.current, projectsRef.current], {
        rotationY: 90,
        opacity: 0,
        scale: 0.5
      });

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          if (!hasAnimated) {
            setHasAnimated(true);
            
            // Animación de entrada de las tarjetas
            gsap.to([experienceRef.current, projectsRef.current], {
              duration: 0.8,
              rotationY: 0,
              opacity: 1,
              scale: 1,
              ease: "back.out(1.7)",
              stagger: 0.2
            });

            // Animación de contadores con efecto giratorio
            let experienceTimer: NodeJS.Timeout;
            let projectsTimer: NodeJS.Timeout;
            
            // Contador de experiencia con rotación
            experienceTimer = setInterval(() => {
              setExperienceCount(prev => {
                const next = prev < 15 ? prev + 1 : 15;
                
                // Efecto de rotación en cada incremento
                if (experienceRef.current) {
                  gsap.to(experienceRef.current, {
                    duration: 0.3,
                    rotationY: 360,
                    ease: "power2.out",
                    yoyo: false
                  });
                }
                
                return next;
              });
            }, 120);

            // Contador de proyectos con rotación
            projectsTimer = setInterval(() => {
              setProjectsCount(prev => {
                const next = prev < 100 ? prev + 5 : 100;
                
                // Efecto de rotación en cada incremento
                if (projectsRef.current) {
                  gsap.to(projectsRef.current, {
                    duration: 0.3,
                    rotationY: 360,
                    ease: "power2.out",
                    yoyo: false
                  });
                }
                
                return next;
              });
            }, 60);

            // Limpiar timers
            setTimeout(() => {
              clearInterval(experienceTimer);
              clearInterval(projectsTimer);
            }, 2500);
          }
        },
        onLeave: () => {
          // Animación al salir de la vista
          gsap.to([experienceRef.current, projectsRef.current], {
            duration: 0.5,
            rotationY: -90,
            opacity: 0.5,
            scale: 0.9,
            ease: "power2.in"
          });
        },
        onEnterBack: () => {
          // Animación al volver a entrar
          gsap.to([experienceRef.current, projectsRef.current], {
            duration: 0.6,
            rotationY: 0,
            opacity: 1,
            scale: 1,
            ease: "back.out(1.4)"
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [hasAnimated]);

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

          <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-8">
            <div 
              ref={experienceRef}
              className="text-center p-6 bg-slate-800 rounded-lg transform-gpu perspective-1000 hover:scale-105 transition-transform duration-300"
              style={{ perspective: '1000px' }}
            >
              <div className="text-4xl font-black text-cyan-400 mb-2">{experienceCount}+</div>
              <div className="text-sm text-gray-400">Años de experiencia</div>
            </div>
            <div 
              ref={projectsRef}
              className="text-center p-6 bg-slate-800 rounded-lg transform-gpu perspective-1000 hover:scale-105 transition-transform duration-300"
              style={{ perspective: '1000px' }}
            >
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