
const TarjetaEvento = ({ evento }) => {
  return (
    <article className="card home-evento-card h-100 shadow-sm">
      <div className="row g-0 h-100">

        <div className="col-12 col-sm-5">
          <img
            src={evento.imagen}
            alt={`Festival ${evento.nombre}`}
            className="home-evento-imagen"
            loading="lazy"
          />
        </div>

        <div className="col-12 col-sm-7">
          <div className="card-body d-flex flex-column h-100">
            <h3 className="h6 fw-bold">
              {evento.nombre}
            </h3>

            <p className="small mb-2">
              <strong>Fecha:</strong> {evento.fecha}
            </p>

            <p className="small mb-3">
              <strong>Lugar:</strong> {evento.ubicacion}
            </p>

            <a
              href={evento.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="btn home-evento-boton mt-auto"
              aria-label={`Más información sobre ${evento.nombre}`}
            >
              Más información ↗
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};

export default TarjetaEvento;
