import "./ContactForm.css";

function ContactForm() {
  return (
    <>
      <section className="formContact">
        <aside className="textFormContact">
            <h2>¡Contactame ahora!</h2>
            <p>
              Diligencia los datos y de inmediato llegará a mi bandeja de entrada
              un correo comunicandome de tu necesidad. <span>Sin trucos, ni trampas.</span> Solo 
              funciones estructuradas
            </p>
        </aside>
        {/* FORMULARIO DE CONTACTO */}
        {/* From Uiverse.io by gharsh11032000 */}
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              {/* INPUT PARA INGRESAR CORREO DE LA COMPAÑIA/PERSONA */}
              <input type="text" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">How Can I Help You?</label>
              <textarea name="textarea" id="textarea">
                {/* ESPACIO DONDE LOS USUARIOS ENVIARAN UN CORREO */}
              </textarea>
            </div>
            <button className="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
