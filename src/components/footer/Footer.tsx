// Importaciones
import "./Footer.css";

function Footer () {
    return (
        <>
            <footer className="footer">
                <div className="footerColumn">
                    <h3 className="footer__title">Enlaces Rápidos</h3>
                    <ul className="footerList">
                        <li><a href="#home" className="footerLink">Inicio</a></li>
                        <li><a href="#about" className="footerLink">Tecnologías</a></li>
                        <li><a href="#projects" className="footerLink">Proyectos</a></li>
                        <li><a href="#contact" className="footerLink">Contacto</a></li>
                    </ul>
                </div>
                <div className="footerColumn">
                    <h3 className="footer__title">Redes Sociales</h3>
                    <ul className="footerList">
                        <li><a href="https://www.linkedin.com/in/juanraigosa/" className="footerLink">LinkedIn</a></li>
                        <li><a href="https://github.com/JuanEsCarmona" className="footerLink">GitHub</a></li>
                        <li><a href="https://stackoverflow.com/users/22537450/esteban-raigoza-carmona?tab=profile" className="footerLink">StackOverflow</a></li>
                    </ul>
                </div>
                <div className="footerColumn">
                    <h3 className="footerTitle">Contacto</h3>
                    <p className="footerText">Email: 
                        <span>raigozacarmonaesteban@gmail.com</span>
                    </p>
                    <p className="footerText">Teléfono: 
                        <span>+57 320 533 6319</span>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;