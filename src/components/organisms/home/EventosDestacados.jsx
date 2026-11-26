import eventosData from "../../../data/eventosData";
import TarjetaEvento from "../../molecules/home/TarjetaEvento";
import TituloSeccion from "../../atoms/TituloSeccion";
import Descripcion from "../../atoms/Descripcion";

const EventosDestacados = () => {
  return (
    <section className="my-5" aria-labelledby="titulo-eventos">
      <div className="mb-4">
        <TituloSeccion texto = "Próximos eventos musicales"/>

        <Descripcion texto="Vive la música en directo y descubre los festivales más esperados." />
      </div>

      <div className="row g-4">
        {eventosData.map((evento) => (
          <div className="col-12 col-lg-4" key={evento.id}>
            <TarjetaEvento evento={evento} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventosDestacados;
