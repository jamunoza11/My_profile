import React from 'react';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #222', color: 'var(--texto-mutado)', fontSize: '0.9rem' }}>
      <p>&copy; {new Date().getFullYear()} - Jose Adrian Alvarez. Diseñado bajo estéticas Cyber-Neon.</p>
      <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Construido de forma reactiva en Ingeniería Informática.</p>
    </footer>
  );
}