
import { useState } from "react";
import CampoFormulario from "../atoms/footer/CampoFormulario";

const FormularioContacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [estadoEnvio, setEstadoEnvio] = useState("");

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setEstadoEnvio("");
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    // Validación adicional de espacios en blanco.
    if (
      !formulario.nombre.trim() ||
      !formulario.correo.trim() ||
      !formulario.mensaje.trim()
    ) {
      setEstadoEnvio("Completa todos los campos.");
      return;
    }

    if (formulario.mensaje.trim().length < 10) {
      setEstadoEnvio(
        "El mensaje debe contener al menos 10 caracteres."
      );
      return;
    }

    // Pendiente: conectar con backend o servicio de correo.
    setEstadoEnvio(
      "Hemos recibido tu mensaje correctamente. Te responderemos a tu correo electrónico a la brevedad, ¡permanece atento!"
    );
  };

  return (
    <>
      <h2 id ="contacto" className="h5 fw-bold mb-3">
        Envíanos un mensaje
      </h2>

      <form onSubmit={manejarEnvio}>
        <CampoFormulario
          id="footer-nombre"
          label="Nombre"
          name="nombre"
          type="text"
          value={formulario.nombre}
          onChange={manejarCambio}
          placeholder="Tu nombre"
          maxLength={80}
          required
        />

        <CampoFormulario
          id="footer-correo"
          label="Correo electrónico"
          name="correo"
          type="email"
          value={formulario.correo}
          onChange={manejarCambio}
          placeholder="correo@ejemplo.com"
          maxLength={254}
          required
        />

        <CampoFormulario
          id="footer-mensaje"
          label="Mensaje"
          name="mensaje"
          value={formulario.mensaje}
          onChange={manejarCambio}
          placeholder="Escribe tu mensaje..."
          minLength={10}
          maxLength={1000}
          multiline
          required
        />

        <button
          type="submit"
          className="btn footer-boton-enviar w-100"
        >
          Enviar mensaje
        </button>

        {estadoEnvio && (
          <p className="footer-aviso mt-3" role="status">
            {estadoEnvio}
          </p>
        )}
      </form>
    </>
  );
};

export default FormularioContacto;
