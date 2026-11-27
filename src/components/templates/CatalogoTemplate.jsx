import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BotonVolver from "../atoms/botones/BotonVolver";
import TituloRedondeado from "../atoms/TituloRedondeado";
import ContenidoCatalogo from "../organisms/catalogo/ContenidoCatalogo";
import EstadoConsulta from "../molecules/estados/EstadoConsulta";

function CatalogoTemplate({
  productos = [],
  cargando = false,
  error = "",
  onReintentar
}) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container flex-grow-1 pt-5 mb-4">
        <BotonVolver
          label="← Volver al menú principal"
          ruta="/"
        />

        <TituloRedondeado texto="Catálogo de productos" />

        <EstadoConsulta
          cargando={cargando}
          error={error}
          onReintentar={onReintentar}
          mensajeCarga="Cargando productos..."
        />

        {!cargando && !error && (
          <ContenidoCatalogo productos={productos} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default CatalogoTemplate;