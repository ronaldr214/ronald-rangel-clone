export default function Team() {
  const teamMembers = [
    {
      name: "Laura Gómez",
      role: "Diseñadora Visual",
      image: "/team-1.webp"
    },
    {
      name: "Andrés Ruiz", 
      role: "Desarrollador Front-End",
      image: "/team-2.webp"
    },
    {
      name: "Camila Torres",
      role: "Estratega de Contenidos e IA", 
      image: "/team-3.webp"
    }
  ];

  return (
    <section className="bg-slate-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-16 fade-in-up">
          Nuestro Equipo
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className={`text-center team-hover fade-in-up delay-${index + 1} bg-slate-700 p-6 rounded-xl`}>
              <div className="relative overflow-hidden rounded-full mx-auto mb-6 w-32 h-32">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-cyan-400 font-medium">{member.role}</p>
              
              {/* Efectos decorativos */}
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}