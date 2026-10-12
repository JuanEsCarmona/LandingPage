/* COMPONENTES */

import Header from "./components/header/Header.tsx";
import Card from "./components/cardLanguages/Card.tsx";
import CardProjects from "./components/cardProjects/CardProjects.tsx";
import ContactForm from "./components/contactForm/ContactForm.tsx";

/* LANDIGN PAGE */

import "./App.css";

function App() {
  return (
    <>
        <Header />
        <main className="App">
          <section className="cardLanguages">
            <Card />
          </section>
          <section className="cardProjects">
            <aside className="ProjectsInformation">
              <h2 className="ProjectsInformation__title">Proyectos</h2>
              <p className="ProjectsInformation__description">
                Estos son algunos de los proyectos que he desarrollado,
                utilizando diferentes tecnologías y lenguajes de programación.
              </p>
            </aside>
            <CardProjects />
          </section>
          <section className="contactForm">
            <ContactForm />
          </section>
        </main>
    </>
  );
}

export default App;
