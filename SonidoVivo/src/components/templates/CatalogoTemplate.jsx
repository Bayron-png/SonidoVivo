import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const CatalogoTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Contenido dinámico que cambia según la pantalla */}
      <main className="flex-grow-1 container pt-5 mb-4">

      </main>

      <Footer />
    </div>
  );
};

export default CatalogoTemplate;
