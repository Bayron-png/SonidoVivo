
import TextoFooter from "../atoms/footer/TextoFooter";
import IdentidadFooter from "../molecules/footer/IdentidadFooter";
import InformacionContacto from "../molecules/footer/InformacionContacto";
import EnlacesFooter from "../molecules/footer/EnlacesFooter";
import FormularioContacto from "./formularios/FormularioContacto";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="contenedor-footer footer-sonidovivo text-white">

      {/* Contenido principal del Footer */}
      <div className="container py-5">
        <div className="row g-4">

          {/* Identidad y redes sociales */}
          <section
            className="col-12 col-md-6 col-lg-3"
            aria-label="Sobre SonidoVivo"
          >
            <IdentidadFooter />
          </section>

          {/* Información de contacto */}
          <section
            className="col-12 col-md-6 col-lg-3"
            aria-label="Información de contacto"
          >
            <InformacionContacto />
          </section>

          {/* Enlaces de navegación */}
          <nav
            className="col-12 col-md-6 col-lg-2"
            aria-label="Navegación del pie de página"
          >
            <EnlacesFooter />
          </nav>

          {/* Formulario de contacto */}
          <section
            className="col-12 col-md-6 col-lg-4"
            aria-label="Formulario de contacto"
          >
            <FormularioContacto />
          </section>

        </div>
      </div>

      {/* Franja inferior */}
      <div className="footer-inferior">
        <div className="container py-3 text-center">
          <TextoFooter />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
