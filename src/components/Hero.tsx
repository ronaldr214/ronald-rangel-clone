export default function Hero() {
  return (
    <section className="bg-slate-800 min-h-screen pt-20">

          <div className="w-full lg:grid lg:grid-cols-2 lg:min-h-screen">
        {/* Foto - arriba en mobile, derecha en desktop */}
        <div 
          style={{height: 'clamp(16rem, 40vh, 100vh)'}} 
          className="lg:min-h-full lg:order-2"
        >
          <img 
            src="/hero-photo.jpeg" 
            alt="Ronald Rangel" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Texto - abajo en mobile, izquierda en desktop */}
        <div className="flex items-center justify-center px-6 lg:px-12 py-12 lg:py-0 lg:order-1">
          <div className="max-w-lg">
            <h1 className="font-black text-white mb-6 leading-tight" style={{fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900}}>
              Las marcas no se improvisan, se construyen con{' '}
              <span className="text-cyan-400">estrategia.</span>
            </h1>
            
            <p className="text-gray-300 mb-8 leading-relaxed" style={{fontSize: 'clamp(1rem, 2vw, 1.25rem)'}}>
              Soy Ronald Rangel, comunicador digital y estratega creativo. 
              Acompaño a emprendedores como tú a potenciar su negocio o 
              marca con desarrollo web, branding y asesoría en inteligencia 
              artificial.
            </p>
            
            <a 
              href="https://wa.me/573002278962?text=Hola%20Ronald,%20vengo%20de%20tu%20web%20y%20quisiera%20agendar%20una%20consultor%C3%ADa." 
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
            >
              AGENDA AHORA, ES GRATIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}