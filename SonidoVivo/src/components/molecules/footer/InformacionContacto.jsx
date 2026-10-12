
const InformacionContacto = () => {
  return (
    <>
      <h2 className="h5 fw-bold mb-3">
        Información de contacto
      </h2>

      <address className="mb-0">
        <ul className="list-unstyled d-grid gap-3">

          <li>
            <strong>Ubicación:</strong>
            <p className="mb-0">
              Santiago, Chile
            </p>
          </li>

          <li>
            <strong>Correo electrónico:</strong>
            <p className="mb-0">
              saludo@sonidovivo.com
            </p>
          </li>

          <li>
            <strong>Teléfono:</strong>
            <p className="mb-0">
              +56 9 4642 8392 - WhatsApp
            </p>
          </li>

          <li>
            <strong>Horario de atención:</strong>
            <p className="mb-0">
              De Lunes a Sábado 
              10:00 a 20:00 horas
            </p>
          </li>

        </ul>
      </address>
    </>
  );
};

export default InformacionContacto;
