'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="group relative hover:scale-110 transition-all duration-500 ease-out"
        >
          <img 
            src="/logo.png" 
            alt="Ronald Rangel Logo" 
            className="h-16 w-auto transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] group-hover:brightness-110"
          />
          <div className="absolute inset-0 rounded-lg bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">Inicio</a>
          <a href="#servicios" className="text-white hover:text-cyan-400 transition-colors font-medium">Servicios</a>
          <a href="#planes" className="text-white hover:text-cyan-400 transition-colors font-medium">Planes</a>
          <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">Blog</Link>
          <a href="#about" className="text-white hover:text-cyan-400 transition-colors font-medium">Sobre Mí</a>
          <a 
            href="https://wa.me/573002278962" 
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}