import React, { useState, useEffect } from 'react';
import avatarImg from '../assets/FOTO.png';

export default function Hero() {
  const frases = [
    "Apasionado por el código.",
    "Transformando café en bugs y soluciones.",
    "En mi máquina funciona.",
    "Si depurar es quitar bichos, programar es ponerlos.",
    "Programador es quien escribe código; BUEN programador es quien lo borra.",
    "El software libre es mejor."
  ];

  const [fraseActual, setFraseActual] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false); // Efecto de desvanecimiento out
      setTimeout(() => {
        setFraseActual((prev) => (prev + 1) % frases.length);
        setVisible(true); // Efecto de desvanecimiento in
      }, 500); 
    }, 5000); // Cambia de frase cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section id="hero" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem', justifyContent: 'space-between' }}>
      <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>
          Hola, soy <span className="neon-text-cyan">Jose Adrian Alvarez</span>
        </h1>
        <h2 style={{ color: 'var(--texto-mutado)', fontSize: '1.5rem', fontWeight: '400' }}>
          Desarrollador Fullstack | Estudiante de Ingeniería Informática
        </h2>
        
        {/* Caja contenedora fija para evitar saltos de layout durante la animación */}
        <div style={{ height: '40px', display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <p style={{
            color: 'var(--neon-magenta)',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            textShadow: '0 0 8px rgba(255,0,85,0.6)',
            transition: 'opacity 0.5s ease',
            opacity: visible ? 1 : 0
          }}>
            ⚡ {frases[fraseActual]}
          </p>
        </div>
      </div>

      <div style={{
        width: '360px', height: '360px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
        border: '3px solid var(--neon-cyan)', boxShadow: '0 0 20px var(--neon-cyan)'
      }}>
        {/* En caso de que no tengas la foto aún, cargará un placeholder oscuro */}
        <img src={avatarImg} alt="Jose Adrian Alvarez" onError={(e) => { e.target.src = "https://via.placeholder.com/360/121216/00f3ff?text=JAA" }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </section>
  );
}