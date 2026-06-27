import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' }); // Limpia error al escribir
  };

  const validateForm = () => {
    let localErrors = {};
    if (!formData.name.trim()) localErrors.name = 'El nombre es obligatorio.';
    if (!formData.subject.trim()) localErrors.subject = 'El asunto es obligatorio.';
    if (!formData.message.trim()) localErrors.message = 'El mensaje no puede estar vacío.';
    
    // Validación básica de RegEx de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      localErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      localErrors.email = 'El formato de correo no es válido.';
    }

    return localErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccessMessage(false);
    } else {
      setErrors({});
      setSuccessMessage(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Limpieza [cite: 108]
    }
  };

  return (
    <section id="contacto" style={{ maxWidth: '600px' }}>
      <h2 className="titulo-seccion neon-text-cyan">Contacto</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--neon-cyan)' }}>Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', background: '#121216', border: '1px solid #333', color: '#fff', borderRadius: '4px' }} />
          {errors.name && <span style={{ color: 'var(--neon-magenta)', fontSize: '0.85rem' }}>{errors.name}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--neon-cyan)' }}>Correo Electrónico</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', background: '#121216', border: '1px solid #333', color: '#fff', borderRadius: '4px' }} />
          {errors.email && <span style={{ color: 'var(--neon-magenta)', fontSize: '0.85rem' }}>{errors.email}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--neon-cyan)' }}>Asunto</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', background: '#121216', border: '1px solid #333', color: '#fff', borderRadius: '4px' }} />
          {errors.subject && <span style={{ color: 'var(--neon-magenta)', fontSize: '0.85rem' }}>{errors.subject}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--neon-cyan)' }}>Mensaje</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', background: '#121216', border: '1px solid #333', color: '#fff', borderRadius: '4px', resize: 'none' }}></textarea>
          {errors.message && <span style={{ color: 'var(--neon-magenta)', fontSize: '0.85rem' }}>{errors.message}</span>}
        </div>

        <button type="submit" className="neon-btn" style={{ width: '100%', padding: '1rem' }}>Enviar Mensaje</button>
        
        {successMessage && (
          <div style={{ padding: '1rem', border: '1px solid var(--neon-green)', color: 'var(--neon-green)', background: 'rgba(57, 255, 20, 0.05)', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold' }}>
            ✓ ¡Formulario verificado con éxito de forma local!
          </div>
        )}
      </form>
    </section>
  );
}