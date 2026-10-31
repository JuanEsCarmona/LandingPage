// Importaciones

// Estilos del componente
import "./ContactForm.css";

// Importaciones de React
import React, { useState } from "react";

// Componente ContactForm
const ContactForm: React.FC = () => {
  // Contanstes a usar

  // Constantes con los datos de los envios
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  // Constantes con el esto del envio
  const [estadoEnvio, setEstadoEnvio] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Funcion que permite el envio del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Los nombres deben coincidir con las claves que espera el servidor.
  const formData = new FormData(e.currentTarget);

  // Estados de envio
  setEstadoEnvio("");
  setEnviando(true);

  // Envio de los datos
  try {
    const response = await fetch("", { // Enlace para enviar
      method: "POST", // Metodo HTTP de envio de datos
      body: formData, // Los datos a enviar
    });

    // Resultado del envio
    let result: { success?: boolean; message?: string };

    // Con base en el resultado, mostramos una alerta diferente
    try {
      result = await response.json();
    } catch {
      // Si la respuesta dada por el servidor no es valida para su lectura
      throw new Error("El servidor devolvió una respuesta que no es JSON válida.");
    }

    if (!response.ok) {
      // Si la respuesta no es positiva 
      throw new Error(result.message || `Error del servidor (${response.status}).`);
    }

    if (!result.success) {
      // Si hubo respuesta positiva por parte del servidor, pero hubo error al enviar los datos
      throw new Error(result.message || "No se pudo enviar el mensaje.");
    }

    // Estados del envio de datos 
    setEstadoEnvio(result.message || "Mensaje enviado correctamente.");
    setCorreo("");
    setMensaje("");
    // Si directamente hubo un error en el envio del formulario
  } catch (error) {
    console.error("Error en el envío del formulario:", error);
    setEstadoEnvio(
      error instanceof Error ? error.message : "Ocurrió un error al enviar el mensaje."
    );
  } finally {
    setEnviando(false);
  }
};

  return (
    <>
      <section className="formContact">
        <aside className="textFormContact">
          <h2>¡Contactame ahora!</h2>
          <p>
            Diligencia los datos y de inmediato llegará a mi bandeja de entrada
            un correo comunicandome de tu necesidad.{" "}
            <span>Sin trucos, ni trampas.</span> Solo funciones estructuradas
          </p>
        </aside>
        {/* FORMULARIO DE CONTACTO */}
        {/* From Uiverse.io by gharsh11032000 */}
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              {/* INPUT PARA INGRESAR CORREO DE LA COMPAÑIA/PERSONA */}
              <input
                type="email"
                id="email"
                name="correo"
                placeholder="juanito123@gmail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">How Can I Help You?</label>
              <textarea
                name="mensaje"
                id="textarea"
                placeholder="Max 100 carácteres."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              >
                {/* ESPACIO DONDE LOS USUARIOS ENVIARAN UN CORREO */}
              </textarea>
            </div>
            <button 
              className="form-submit-btn" 
              type="submit"
              disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar"}
            </button>
            <p role="status" aria-live="polite">
              {estadoEnvio}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
