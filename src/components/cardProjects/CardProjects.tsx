// IMPORTACIONES DE REACT 
import { useRef, useState, type UIEvent } from 'react';

// IMPORTACIONES DE IMAGENES Y ESTILOS
import ImgSweetsol from '../../assets/img/SweetSolMantenimiento.png';
import ImgBikeStore from '../../assets/img/ImgBikeStore.png';
import ImgAiame from '../../assets/img/ImgAiame.png';

import './CardProject.css';

// Define los campos que necesita cada proyecto para mostrarse en una tarjeta.
interface Project {
  id: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  title: string;
  description: string;
  technologies: string[];
}

// Esta lista es la fuente de datos del carrusel: cada objeto representa una tarjeta.
const projects: Project[] = [
  {
    id: 'sweetsol-mantenimiento',
    image: ImgSweetsol,
    imageAlt: 'Inicio de sesión en SweetSol',
    imageCaption: 'Inicio de sesión en SweetSol',
    title: 'SweetSol Mantenimiento',
    description: 'Plataforma de gestión de mantenimiento para SweetSol.',
    technologies: ['JavaScript', 'PHP', 'React', 'SQL Server', 'Docker'],
  },
  {
    id: 'bikestore',
    image: ImgBikeStore,
    imageAlt: 'Pagina principal de BikeStore',
    imageCaption: 'Pagina principal de BikeStore',
    title: 'BikeStore',
    description: 'Simulación de una tienda de bicicletas con carrito de compras y pasarela de pago.',
    technologies: ['JavaScript', 'Node.js', 'React', 'PosgreSQL', 'XAMPP'],
  },
  {
    id: 'aiame',
    image: ImgAiame,
    imageAlt: 'Inicio de sesión en AIAME',
    imageCaption: 'Inicio de sesión en AIAME',
    title: 'AIAME',
    description: 'Plataforma de gestión de mantenimiento para AIAME.',
    technologies: ['JavaScript', 'PHP', 'React', 'PhpMyAdmin', 'Dart', 'Flutter',],
  },
];

function CardProjects() {
  // Conserva una referencia al área desplazable para llevarla a la tarjeta elegida.
  const viewportRef = useRef<HTMLDivElement>(null);

  // Guarda la posición de la tarjeta visible; el primer elemento tiene índice 0.
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    // scrollLeft indica cuánto se desplazó el carrusel; al dividirlo por su ancho
    // obtenemos qué tarjeta está más cerca de quedar visible por completo.
    const viewport = event.currentTarget;
    const index = Math.round(viewport.scrollLeft / viewport.clientWidth);

    // Limita el índice al último proyecto para que nunca supere el final de la lista.
    setActiveIndex(Math.min(index, projects.length - 1));
  };

  const goToProject = (index: number) => {
    // Desplaza el área una tarjeta por vez: índice multiplicado por el ancho visible.
    const viewport = viewportRef.current;

    if (viewport) {
      viewport.scrollTo({ left: index * viewport.clientWidth });
    }
  };

  return (
    <div className="projectsCarousel">
      <div
        className="projectsCarousel__viewport"
        ref={viewportRef}
        onScroll={handleScroll}
        role="region"
        aria-label="Carrusel de proyectos"
        tabIndex={0}
      >
        <div className="projectsCarousel__track">
          {projects.map((project, index) => (
            <article
              className="projectsCarousel__slide"
              key={project.id}
              aria-label={`${index + 1} de ${projects.length}: ${project.title}`}
            >
              <div className="cardProject">
                <figure className="cardHeader">
                  <img src={project.image} alt={project.imageAlt} />
                  <figcaption className="cardCaption">{project.imageCaption}</figcaption>
                </figure>
                <div className="cardContent">
                  <h3 className="cardTitle">{project.title}</h3>
                  <p className="cardDescription">{project.description}</p>
                </div>
                <div className="cardFooter">
                  <ul className="languages" aria-label="Tecnologías utilizadas">
                    {project.technologies.map((technology) => (
                      <li className="language" key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {projects.length > 1 && (
        <div className="projectsCarousel__controls">
          <button
            className="projectsCarousel__arrow"
            type="button"
            aria-label="Proyecto anterior"
            onClick={() => goToProject(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            ‹
          </button>
          <div className="projectsCarousel__indicators" aria-label="Seleccionar proyecto">
            {projects.map((project, index) => (
              <button
                className={`projectsCarousel__indicator${activeIndex === index ? ' is-active' : ''}`}
                key={project.id}
                type="button"
                aria-label={`Ir al proyecto ${index + 1}: ${project.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
          <button
            className="projectsCarousel__arrow"
            type="button"
            aria-label="Proyecto siguiente"
            onClick={() => goToProject(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default CardProjects;
