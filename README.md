

La presente es pagina web desarrollada pra mostrar informacion profecional.Accesibilidad básica, 
cuyo objetivo es desarrollar un **Portafolio Profesional Web** utilizando React y Vite, aplicando los conceptos fundamentales del framework como componentes, props, estado, renderizado dinámico, consumo de datos y formularios controlados.

La aplicación presenta información profesional del desarrollador de forma organizada, interactiva y responsive, permitiendo mostrar habilidades, proyectos y datos de contacto mediante una arquitectura escalable y reutilizable.


Objetivos 
 Construir una aplicación web utilizando React.
- Implementar componentes reutilizables.
- Consumir datos desde un archivo JSON mediante Fetch API.
- Renderizar listas utilizando map().
- Aplicar useState y useEffect.
- Implementar filtros dinámicos.
- Crear un formulario controlado con validaciones.
- Mantener una estructura limpia y escalable.

Estructura del Proyecto

Estructura de carpetas
portfolio-react/
├── public/
│   └── data/
│       └── projects.json
├── src/
│   ├── assets/
│   │   └── foto.png          <-- Coloca aquí tu foto de perfil
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SkillList.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectFilters.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── skills.js
│   ├── services/
│   │   └── projects.service.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
|------index.html
├── package.json
|------package.json
└── README.md


Instalación

Clona este repositorio

Entra en la carpeta del proyecto:
cd nombre-de-tu-carpeta

¿Cómo ejecutarlo en tu consola?
Instala las dependencias iniciales del proyecto si acabas de crearlo:
npm install

Corre el servidor local de desarrollo en Vite:
npm run dev


