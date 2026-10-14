
import eventosData from "../../../data/eventosData";
import TarjetaEvento from "../../molecules/home/TarjetaEvento";

const EventosDestacados = () => {
  return (
    <section
      className="my-5"
      aria-labelledby="titulo-eventos"
    >
      <div className="mb-4">
        <h2 id="titulo-eventos" className="fw-bold">
          Próximos eventos musicales
        </h2>

        <p className="text-muted">
          Vive la música en directo y descubre
          los festivales más esperados.
        </p>
      </div>

      <div className="row g-4">
        {eventosData.map((evento) => (
          <div
            className="col-12 col-lg-4"
            key={evento.id}
          >
            <TarjetaEvento evento={evento} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventosDestacados;
