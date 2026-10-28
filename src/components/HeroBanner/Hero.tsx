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
                    ¿Tienes una idea o necesitas renovar tu web? Te ayudo a convertirla en una experiencia digital clara y funcional.
                </p>
                <button className="heroButton">
                    Hablemos de tu proyecto
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