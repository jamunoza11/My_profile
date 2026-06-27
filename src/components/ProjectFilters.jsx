import React from 'react';

export default function ProjectFilters({ activeFilter, setActiveFilter }) {
  const categorias = ['Todos', 'React', 'Backend', 'Fullstack'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveFilter(cat)}
          style={{
            background: activeFilter === cat ? 'var(--neon-cyan)' : 'transparent',
            color: activeFilter === cat ? 'var(--bg-principal)' : 'var(--neon-cyan)',
            border: '1px solid var(--neon-cyan)',
            padding: '0.5rem 1.2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: activeFilter === cat ? '0 0 10px var(--neon-cyan)' : 'none',
            transition: 'all 0.3s'
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}