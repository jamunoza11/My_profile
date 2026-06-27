import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="neon-border-magenta" style={{
      backgroundColor: 'var(--bg-tarjeta)', borderRadius: '8px', padding: '1.5rem',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem'
    }}>
      <div>
        <span style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', textTransform: 'uppercase' }}>
          {project.category} · {project.level}
        </span>
        <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0 1rem 0' }}>{project.title}</h3>
        <p style={{ color: 'var(--texto-mutated)', fontSize: '0.95rem', lineHeight: '1.5' }}>{project.description}</p>
      </div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} style={{ fontSize: '0.75rem', background: '#222', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
              {tech}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href={project.repositoryUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--neon-cyan)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
            &lt; Código /&gt;
          </a>
        </div>
      </div>
    </div>
  );
}