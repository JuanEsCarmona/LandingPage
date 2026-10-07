/* IMPORTACIONES DE ARCHIVOS ESTATICOS */

import ImgEjemplo from '../../assets/img/SweetSolMantenimiento.png';

import './CardProject.css';

function CardProject() {
  return (
    <>
      <div className="cardProject">
        <div className="tools">
          <div className="circle">
            <span className="red box"></span>
          </div>
          <div className="circle">
            <span className="yellow box"></span>
          </div>
          <div className="circle">
            <span className="green box"></span>
          </div>
        </div>
        {/* IMAGEN DEL HEADER */}
        <div className="card__header">
            <img src={ImgEjemplo} alt="Inicio de Sesión en SweetSol" />
        </div>
        {/* NOMBRE DEL PROYECTO */}
        <div className="card__content">
          <h3 className="card__title">SweetSol Mantenimiento</h3>
          <p className="card__description">Plataforma de gestión de mantenimiento para SweetSol.</p>
        </div>
        {/* LENGUAJES USADOS EN EL PROYECTO */}
        <div className="card__footer">
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
