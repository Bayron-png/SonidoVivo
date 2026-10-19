
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import FiltrosCatalogo from "../organisms/catalogo/FiltrosCatalogo";
import ProductosLista from "../organisms/catalogo/ProductosLista";
import TituloRedondeado from "../atoms/TituloRedondeado";
import BotonVolver from "../atoms/botones/BotonVolver";

const CatalogoTemplate = ({ productos = [] }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver
          label="← Volver al menú principal"
          ruta="/"
        />

        <TituloRedondeado texto="Catálogo de productos" />

        <div className="row g-4 mt-2">
          <div className="col-12 col-md-3">
            <FiltrosCatalogo />
          </div>

          <div className="col-12 col-md-9">
            <ProductosLista productos={productos} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogoTemplate;
