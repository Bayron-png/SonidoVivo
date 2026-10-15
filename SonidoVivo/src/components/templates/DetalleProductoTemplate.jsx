import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import DetalleProductoContenido from "../organisms/DetalleProductoContenido";

const DetalleProductoTemplate = ({ producto, categoria }) => {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <DetalleProductoContenido
        producto={producto}
        categoria={categoria}
      />

      <Footer />

    </div>
  );
};

export default DetalleProductoTemplate;