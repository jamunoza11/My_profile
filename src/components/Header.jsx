import React from 'react';

export default function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, backgroundColor: 'rgba(10,10,12,0.95)',
      backdropFilter: 'blur(5px)', borderBottom: '1px solid #222',
      display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', zIndex: 100
    }}>
      <div className="neon-text-cyan" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
      </div>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#sobre-mi" style={{ color: 'var(--texto-blanco)', textDecoration: 'none' }}>Sobre mí</a>
        <a href="#habilidades" style={{ color: 'var(--texto-blanco)', textDecoration: 'none' }}>Habilidades</a>
        <a href="#proyectos" style={{ color: 'var(--texto-blanco)', textDecoration: 'none' }}>Proyectos</a>
        <a href="#contacto" style={{ color: 'var(--texto-blanco)', textDecoration: 'none' }}>Contacto</a>
      </nav>
    </header>
  );
}