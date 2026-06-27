import React from 'react';
import { skills } from '../data/skills';

export default function SkillList() {
  return (
    <section id="habilidades" style={{ backgroundColor: 'var(--bg-tarjeta)', borderRadius: '12px', padding: '3rem 2rem', margin: '2rem auto' }}>
      <h2 className="titulo-seccion neon-text-cyan">Herramientas & Tecnologías</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {skills.map((skill) => (
          <button 
            key={skill.id} 
            className="neon-border-magenta"
            style={{
              backgroundColor: 'rgba(255, 0, 85, 0.05)',
              color: 'var(--texto-blanco)',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {skill.name}
            <span style={{ block: 'inline-block', fontSize: '0.7rem', color: 'var(--neon-cyan)', marginLeft: '8px', verticalAlign: 'middle' }}>
              [{skill.type}]
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}