/* IMPORTACIONES DE ARCHIVOS ESTATICOS */

import ImgEjemplo from '../../assets/img/SweetSolMantenimiento.png';

import './CardProject.css';

function CardProject() {
  return (
    <>
      <div className="cardProject">
        {/* IMAGEN DEL HEADER */}
        <figure className="cardHeader">
            <img src={ImgEjemplo} alt="Inicio de Sesión en SweetSol" />
            <figcaption className="cardCaption">Inicio de Sesión en SweetSol</figcaption>
        </figure>
        {/* NOMBRE DEL PROYECTO */}
        <div className="cardContent">
          <h3 className="cardTitle">SweetSol Mantenimiento</h3>
          <p className="cardDescription">Plataforma de gestión de mantenimiento para SweetSol.</p>
        </div>
        {/* LENGUAJES USADOS EN EL PROYECTO */}
        <div className="cardFooter">
          <div className="languages">
            <span className="language">JavaScript -</span>
            <span className="language"> PHP -</span>
            <span className="language"> React</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
