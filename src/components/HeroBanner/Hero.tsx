// Importaciones de Estilos

import './Hero.css'


// Esqueleyto (HTML) del componente
function Hero () {
    return (
    <>
        <section className="heroBanner">
            <div className="heroContent">
                <h1 className="heroTitle">
                    Tus proyectos, en buenas manos
                </h1>
                <p className="heroCta">

                </p>
                <button className="heroButton">
                    ¿Quieres verme ahora? ¡Contáctame!
                </button>
                <p className="heroText">
                    Estoy disponible siempre para atender tus solicitudes :D
                </p>
            </div>
        </section>
    </>
    )
}

export default Hero; 