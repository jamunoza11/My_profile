import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillList from './components/SkillList';
import ProjectFilters from './components/ProjectFilters';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { getProjects } from './services/projects.service';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Lógica inmutable de filtrado
  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Sección "Sobre Mí" intermedia explicativa (RF-02) */}
        <section id="sobre-mi" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="titulo-seccion neon-text-cyan">Sobre Mí</h2>
          <p style={{ color: 'var(--texto-mutado)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Soy estudiante de <strong>Ingeniería Informática</strong> con un enfoque apasionado hacia el desarrollo de software Fullstack. 
            Me especializo en diseñar soluciones limpias, optimizadas y modulares, balanceando la robustez en la lógica del backend 
            con interfaces interactivas y dinámicas en el frontend.
          </p>
        </section>

        <SkillList />

        {/* Sección Proyectos con Renderizado Condicional de API (RF-04 a RF-10) */}
        <section id="proyectos">
          <h2 className="titulo-seccion neon-text-cyan">Proyectos Realizados</h2>
          
          <ProjectFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          {loading && (
            <p style={{ textAlign: 'center', color: 'var(--neon-cyan)', fontWeight: 'bold' }}>
              ⚡ Descargando datos desde el servidor JSON simulado...
            </p>
          )}

          {error && (
            <p style={{ textAlign: 'center', color: 'var(--neon-magenta)', fontWeight: 'bold' }}>
              ❌ Error: {error}
            </p>
          )}

          {!loading && !error && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {!loading && !error && filteredProjects.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--texto-mutado)' }}>No se encontraron proyectos en esta categoría.</p>
          )}
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}