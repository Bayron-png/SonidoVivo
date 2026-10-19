import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import DetalleProductoContenido from "../organisms/detalle-producto/DetalleProductoContenido";
import BotonVolver from "../atoms/botones/BotonVolver";

const DetalleProductoTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container flex-grow-1 py-4">
        <BotonVolver label="← Volver al catálogo" ruta="/catalogo" />
        <DetalleProductoContenido />
      </main>

      <Footer />
    </div>
  );
};

export default DetalleProductoTemplate;
