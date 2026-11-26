import { Link } from "react-router-dom";

const BannerNosotros = () => {
  return (
    <section
      id="nosotros"
      className="home-banner d-flex align-items-center"
      aria-labelledby="titulo-nosotros"
    >
      <div className="container py-5">
        <div className="home-banner-contenido">
          <h1 id="titulo-nosotros" className="fw-bold mb-3">
            Más que música,
            <span className="home-banner-destacado d-block">
              somos comunidad.
            </span>
          </h1>

          <p className="fs-5 mb-4">
            En SonidoVivo conectamos personas,
            instrumentos e historias que hacen
            vibrar al mundo.
          </p>

          <Link
            to="/nosotros"
            className="btn home-banner-boton fw-semibold"
          >
            Conócenos →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerNosotros;
