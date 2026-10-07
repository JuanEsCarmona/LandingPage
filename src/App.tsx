/* COMPONENTES */

import Header from './components/header/Header.tsx';
import Card from './components/cardLanguages/Card.tsx';
import CardProject from './components/cardProjects/CardProjects.tsx';
import ContactForm from './components/contactForm/ContactForm.tsx';

/* LANDIGN PAGE */

import './App.css'

function App() {

  return (
    <>
      <Header />
      <body className="App">
        <section className="card__languages">
          <Card />
        </section>
        <section className="card__projects">
          <CardProject />
        </section>
        <section className="contact__form">
          <ContactForm />
        </section>  
      </body>
    </>
  )
}

export default App
