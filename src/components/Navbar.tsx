'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => setOpen(false), [pathname]);

  const linkBase =
    'block px-3 py-2 text-white/90 hover:text-cyan-400 transition-colors font-medium';
  const active = 'text-cyan-400';

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 md:px-6 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}
      aria-label="Barra de navegación"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          href="/"
          className="group relative flex items-center gap-2 hover:scale-105 transition-all duration-300 ease-out"
          aria-label="Ir al inicio"
        >
          <img
            src="/logo.png"
            alt="Ronald Rangel Logo"
            className="h-12 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] group-hover:brightness-110"
          />
          <div className="absolute inset-0 rounded-lg bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {/* Ícono burger / close en SVG */}
          <svg className={`${open ? 'hidden' : 'block'} h-6 w-6`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg className={`${open ? 'block' : 'hidden'} h-6 w-6`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>

        {/* Menú escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`${linkBase} ${pathname === '/' ? active : ''}`}>Inicio</Link>
          <a href="#servicios" className={linkBase}>Servicios</a>
          <a href="#planes" className={linkBase}>Planes</a>
          <Link href="/portafolio" className={`${linkBase} ${pathname?.startsWith('/portafolio') ? active : ''}`}>Portafolio</Link>
          <Link href="/blog" className={`${linkBase} ${pathname === '/blog' ? active : ''}`}>Blog</Link>
          <a href="#about" className={linkBase}>Sobre Mí</a>
          <a
            href="https://wa.me/573002278962"
            className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Overlay para cerrar tocando fuera */}
      {open && (
        <button
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`md:hidden origin-top transition-[transform,opacity] duration-200 ${
          open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-lg shadow-2xl overflow-hidden">
          <div className="px-4 py-3">
            <Link href="/" className={`${linkBase} ${pathname === '/' ? active : ''}`}>Inicio</Link>
            <a href="#servicios" className={linkBase}>Servicios</a>
            <a href="#planes" className={linkBase}>Planes</a>
            <Link href="/portafolio" className={`${linkBase} ${pathname?.startsWith('/portafolio') ? active : ''}`}>Portafolio</Link>
            <Link href="/blog" className={`${linkBase} ${pathname === '/blog' ? active : ''}`}>Blog</Link>
            <a href="#about" className={linkBase}>Sobre Mí</a>
            <a
              href="https://wa.me/573002278962"
              className="mt-2 mb-1 block text-center bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-bold transition-all duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
