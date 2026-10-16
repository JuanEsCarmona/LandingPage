// Importaciones del componente

// Importaciones de los SVG
import JavaScript from "../../assets/img/LogosJavascript.svg";
import Html5 from "../../assets/img/DeviconHtml5.svg";
import Css3 from "../../assets/img/DeviconCss3.svg";
import Php from "../../assets/img/LogosPhp.svg";
import Python from "../../assets/img/MaterialIconThemePython.svg";
import JavaSpringBoot from "../../assets/img/LogosSpringIcon.svg";
import SQL from "../../assets/img/GriddyIconsSql.svg";
import PostgreSQL from "../../assets/img/LogosPostgresql.svg";
import SQLServer from "../../assets/img/DeviconPlainMicrosoftsqlserverWordmark.svg";
import PhpMyAdmin from "../../assets/img/ThesvgColorPhpmyadmin.svg";
import Docker from "../../assets/img/MaterialIconThemeDocker.svg";
import Shell from "../../assets/img/IconmindShell.svg";
import Nginx from "../../assets/img/LogosNginx.svg";

// Importaciones de estilos en hojas de cascada (CSS3)
import "./Card.css";

// Define los campos que necesita cada lenguaje para mostrarse en una tarjeta.
interface Languages {
  id: string;
  img: string;
  imgAlt: string;
  imgCaption: string;
  name: string;
}

// Lista con los datos de las tarjetas de lenguajes de programación.

const languages: Languages[] = [
  {
    id: "1",
    img: JavaScript,
    imgAlt: "Logo de JavaScript",
    imgCaption: "JavaScript",
    name: "JavaScript",
  },
  {
    id: "2",
    img: Html5,
    imgAlt: "Logo de Html5",
    imgCaption: "Html5",
    name: "Html5",
  },
  {
    id: "3",
    img: Css3,
    imgAlt: "Logo de CSS3",
    imgCaption: "CSS3",
    name: "CSS3",
  },
  {
    id: "4",
    img: Php,
    imgAlt: "Logo de PHP",
    imgCaption: "PHP",
    name: "PHP",
  },
  {
    id: "5",
    img: Python,
    imgAlt: "Logo de Python",
    imgCaption: "Python",
    name: "Python",
  },
  {
    id: "6",
    img: JavaSpringBoot,
    imgAlt: "Logo de Java SpringBoot",
    imgCaption: "Java SpringBoot",
    name: "Java SpringBoot",
  },
  {
    id: "7",
    img: SQL,
    imgAlt: "Logo de SQL",
    imgCaption: "SQL",
    name: "SQL",
  },
  {
    id: "8",
    img: PostgreSQL,
    imgAlt: "Logo de PostgreSQL",
    imgCaption: "PostgreSQL",
    name: "PostgreSQL",
  },
  {
    id: "9",
    img: SQLServer,
    imgAlt: "Logo de SQL Server",
    imgCaption: "SQL Server",
    name: "SQL Server",
  },
  {
    id: "10",
    img: PhpMyAdmin,
    imgAlt: "Logo de PhpMyAdmin",
    imgCaption: "PhpMyAdmin",
    name: "PhpMyAdmin",
  },
  {
    id: "11",
    img: Docker,
    imgAlt: "Logo de Docker",
    imgCaption: "Docker",
    name: "Docker",
  },
  {
    id: "12",
    img: Shell,
    imgAlt: "Logo de Shell Scripting",
    imgCaption: "Shell Scripting",
    name: "Shell Scripting",
  },
  {
    id: "13",
    img: Nginx,
    imgAlt: "Logo de Nginx",
    imgCaption: "Nginx",
    name: "Nginx",
  },
];

function Card() {
  return (
    <div className="techStack">
      <h2 className="techStack__title">Tecnologías</h2>
      <div className="techStack__grid">
        {languages.map((language) => (
          <article key={language.id} className="techStack__item">
            <figure className="techStack__figure">
              <img
                className="techStack__icon"
                src={language.img}
                alt={language.imgAlt}
                loading="lazy"
              />
              <figcaption className="techStack__name">
                {language.imgCaption}
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Card;
