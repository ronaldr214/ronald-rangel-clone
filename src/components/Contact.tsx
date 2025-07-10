export default function Contact() {
  return (
    <section className="bg-slate-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-8">
          No lo pienses más y contacta ahora
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Es momento de diferenciarte de la competencia. Te ayudo en todo el proceso, por mi experiencia y por el equipo de profesionales que me acompañan en la tarea.
        </p>
        <a 
          href="https://wa.me/573002278962?text=Hola%20Ronald,%20estoy%20listo%20para%20empezar%20mi%20proyecto." 
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
        >
          AGENDAR CONSULTORÍA
        </a>
      </div>
    </section>
  );
}