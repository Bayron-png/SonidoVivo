import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import CategoriasCatalogo from "../organisms/CategoriasCatalogo";
import TituloRedondeado from "../atoms/TituloRedondeado";
import BotonVolver from "../atoms/botones/BotonVolver";

const CatalogoTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Contenido dinámico que cambia según la pantalla */}
      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver label = "Volver al menú principal"/>
        <TituloRedondeado texto = "Nuestros Productos"/>
        <CategoriasCatalogo/>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogoTemplate;
