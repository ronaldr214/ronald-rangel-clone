"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaRobot,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const BRAND = {
  bg: "#1d293d",
  cyan600: "oklch(60.9% .126 221.723)", // tu cyan base
};

const servicios = [
  {
    titulo: "Desarrollo Web Estratégico",
    descripcion: "Sitios y landing pages rápidos, claros y listos para convertir.",
    icono: <FaCode className="text-cyan-400 text-3xl" />,
    imagen: "/portfolio/web.jpg",
  },
  {
    titulo: "Branding con Propósito",
    descripcion: "Identidad visual + tono de marca para comunicar con coherencia.",
    icono: <FaPaintBrush className="text-cyan-400 text-3xl" />,
    imagen: "/portfolio/branding.jpg",
  },
  {
    titulo: "Marketing Digital Inteligente",
    descripcion: "Estrategias sociales, email y campañas enfocadas en ROI.",
    icono: <FaBullhorn className="text-cyan-400 text-3xl" />,
    imagen: "/portfolio/marketing.jpg",
  },
  {
    titulo: "Contenidos con IA",
    descripcion: "Producción de contenido apoyado en IA para acelerar resultados.",
    icono: <FaRobot className="text-cyan-400 text-3xl" />,
    imagen: "/portfolio/ia.jpg",
  },
  {
    titulo: "Asesoría en IA",
    descripcion: "Implementación de IA para tu negocio con foco en valor real.",
    icono: <FaLightbulb className="text-cyan-400 text-3xl" />,
    imagen: "/portfolio/consultoria-ia.jpg",
  },
  {
    titulo: "Comunicación y PR",
    descripcion: "Media training, mensajes clave y manejo de reputación.",
    icono: <FaComments className="text-cyan-400 text-3xl" />,
    imagen: "/portfolio/pr.jpg",
  },
];

const queHago = [
  {
    icono: <FaCode className="text-cyan-400" />,
    t: "Desarrollo Web Estratégico",
    d: "Sitios y landings rápidas, accesibles y enfocadas en conversión.",
  },
  {
    icono: <FaPaintBrush className="text-cyan-400" />,
    t: "Branding con Propósito",
    d: "Identidad visual, tono y guías para comunicar con coherencia.",
  },
  {
    icono: <FaBullhorn className="text-cyan-400" />,
    t: "Marketing Inteligente",
    d: "Estrategia, social y email con automatización y métricas.",
  },
  {
    icono: <FaRobot className="text-cyan-400" />,
    t: "Contenidos con IA",
    d: "Workflows de contenido, video/voz y assets creativos.",
  },
  {
    icono: <FaLightbulb className="text-cyan-400" />,
    t: "Asesoría en IA",
    d: "Casos de uso, stack y entrenamiento práctico.",
  },
  {
    icono: <FaComments className="text-cyan-400" />,
    t: "Comunicación y PR",
    d: "Media training, mensajes clave y reputación.",
  },
];

export default function ClientPortafolio() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entradas hero
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .from(".hero .reveal-up", { y: 24, opacity: 0, stagger: 0.08, duration: 0.55 });

      // Palabra cambiante en el H1
      if (wordRef.current) {
        const words = ["creativo", "estratégico", "efectivo", "inteligente", "consistente"];
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });
        words.forEach((w) => {
          tl.to(wordRef.current!, { opacity: 0, y: 8, duration: 0.25 })
            .add(() => (wordRef.current!.textContent = w))
            .to(wordRef.current!, { opacity: 1, y: 0, duration: 0.35 })
            .to({}, { duration: 1.4 });
        });
      }

      // Parallax sutil a la foto del hero
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });
      }

      // Reveal en scroll para bloques
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 22,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="min-h-screen text-white"
      style={{ background: BRAND.bg }}
    >
      {/* HERO */}
      <section className="hero pt-20 md:pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 reveal-up">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/10">
                ←
              </span>
              <span className="text-sm">Volver al inicio</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 reveal-up">
              Portafolio{" "}
              <span ref={wordRef} className="text-cyan-400">
                creativo
              </span>{" "}
              de Ronald Rangel
            </h1>

            <p className="text-white/85 max-w-xl reveal-up">
              Comunicador, estratega digital y facilitador de adopción de IA. 25+ años creando soluciones útiles en web,
              branding, marketing y contenidos.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-6 text-sm reveal-up">
              {[
                ["25+", "años de experiencia"],
                ["100+", "proyectos y campañas"],
                ["24–48h", "respuesta"],
              ].map(([n, t]) => (
                <div key={n}>
                  <span className="block text-2xl sm:text-3xl font-bold text-cyan-400">{n}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Imagen hero (aspect ratio, sin altura fija) */}
          <div ref={heroImgRef} className="relative order-2 md:order-none">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] mt-6 md:mt-0">
            <Image src="/images/ronald-hero.jpg" alt="Ronald Rangel" fill className="object-cover" priority />
            </div>
          </div>

        </div>
      </section>

      {/* QUÉ HAGO */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 reveal">Qué hago</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {queHago.map((b) => (
              <div
                key={b.t}
                className="reveal rounded-2xl p-6 border border-white/10 bg-white/[0.06] hover:border-white/20 transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  {b.icono}
                  <h3 className="font-semibold text-base md:text-lg leading-tight">{b.t}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO POR ÁREAS (tarjetas con imagen) */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 reveal">Portafolio por áreas</h2>
          <p className="mb-10 text-white/80 max-w-3xl reveal">
            Una vista visual de lo que hago. Estas imágenes son mockups referenciales y pueden sustituirse por casos reales.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => (
              <article
                key={s.titulo}
                className="reveal group bg-white/[0.06] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                {/* Imagen */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={s.imagen}
                    alt={s.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1d293d66] to-[#1d293d99] pointer-events-none" />
                </div>

                {/* Contenido */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-2 text-cyan-400">
                    {s.icono}
                    <h3 className="text-[1.1rem] md:text-lg font-bold md:font-semibold leading-snug min-h-[2.6rem] md:min-h-0">
                      {s.titulo}
                    </h3>
                  </div>
                  <p className="text-white/80 text-[0.98rem] leading-relaxed">{s.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">¿Hablamos de tu proyecto?</h2>
          <p className="mt-3 text-white/75">
            Respondo en 24–48h. Cuéntame qué necesitas y te propongo el mejor camino.
          </p>
          <a
            className="inline-flex mt-6 px-6 py-3 rounded-xl font-semibold"
            href="https://wa.me/573002278962?text=Hola%20Ronald,%20quiero%20una%20asesor%C3%ADa"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: BRAND.cyan600, color: "#0b1424" }}
          >
            Agenda por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
