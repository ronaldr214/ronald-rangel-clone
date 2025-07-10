'use client';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
        href="https://wa.me/573002278962?text=Hola%20Ronald,%20quiero%20hablar%20contigo"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.134 1.596 5.945L0 24l6.256-1.595c1.741.943 3.706 1.447 5.761 1.447 6.621 0 11.988-5.367 11.988-11.987C23.005 5.244 18.638.001 12.017.001zM12.017 21.92c-1.737 0-3.449-.436-4.94-1.26l-.355-.211-3.681.938.994-3.584-.232-.374c-.915-1.457-1.398-3.142-1.398-4.876 0-5.466 4.521-9.987 10.012-9.987 5.491 0 9.988 4.521 9.988 9.987-.001 5.465-4.498 9.987-10.388 9.987z"/>
          <path d="M18.426 15.035c-.3-.15-1.774-.875-2.049-.975s-.475-.15-.675.15-.775.975-.95 1.175-.35.225-.65.075-1.275-.469-2.425-1.494c-.9-.8-1.5-1.787-1.675-2.087s-.019-.462.131-.612c.135-.135.3-.35.45-.525s.2-.3.3-.5.05-.375-.025-.525-.675-1.625-.925-2.225c-.244-.576-.494-.497-.675-.506-.175-.007-.375-.009-.575-.009s-.525.075-.8.375-.9.875-.9 2.125.925 2.462 1.05 2.637s1.8 2.75 4.362 3.862c.612.263 1.088.419 1.463.537.613.194 1.175.166 1.619.1.494-.074 1.775-.725 2.024-1.425s.25-1.3.175-1.425-.275-.2-.575-.35z"/>
        </svg>
        
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Hablemos ahora
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </a>
    </div>
  );
}