
import { useState } from "react";
import CampoFormulario from "../../atoms/footer/CampoFormulario";
import { validarLongitudMinimaConEspacios, validarObligatorio } from "../../../utils/validaciones/validacionesGenerales";
import { validarNombre } from "../../../utils/validaciones/validacionNombre";
import { validarCorreo } from "../../../utils/validaciones/validacionCorreo";


const validarMensaje = (mensaje) => {
  const errorObligatorio = validarObligatorio(mensaje);
  if (errorObligatorio) return errorObligatorio;

  return validarLongitudMinimaConEspacios(mensaje.trim(), 10);
};

const FormularioContacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [estadoEnvio, setEstadoEnvio] = useState("");

  const [mostrarErrores, setMostrarErrores] = useState(false);

  const handleValueChange = (evento) => {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setEstadoEnvio("");
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const hayErrores =
      validarNombre(formulario.nombre) ||
      validarCorreo(formulario.correo) ||
      validarMensaje(formulario.mensaje);

    if (hayErrores){
      setMostrarErrores(true);
      setEstadoEnvio("Revisa los campos marcados antes de enviar.");
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

       {/* noValidate: evita los globos de error del navegador para que
          se vean los mensajes de nuestras validaciones */}
      <form onSubmit={manejarEnvio} noValidate>
        <CampoFormulario
          id="footer-nombre"
          label="Nombre"
          name="nombre"
          type="text"
          value={formulario.nombre}
          onChange={handleValueChange}
          placeholder="Tu nombre"
          maxLength={80}
          required
          validar={validarNombre}
          mostrarErrores={mostrarErrores}
        />

        <CampoFormulario
          id="footer-correo"
          label="Correo electrónico"
          name="correo"
          type="email"
          value={formulario.correo}
          onChange={handleValueChange}
          placeholder="correo@ejemplo.com"
          maxLength={254}
          required
          validar={validarCorreo}
          mostrarErrores={mostrarErrores}
        />

        <CampoFormulario
          id="footer-mensaje"
          label="Mensaje"
          name="mensaje"
          value={formulario.mensaje}
          onChange={handleValueChange}
          placeholder="Escribe tu mensaje..."
          minLength={10}
          maxLength={1000}
          multiline
          required
          validar={validarMensaje}
          mostrarErrores={mostrarErrores}
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
