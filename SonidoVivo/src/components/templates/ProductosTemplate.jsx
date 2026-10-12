import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import ProductosLista from "../organisms/ProductosLista";
import TituloRedondeado from "../atoms/TituloRedondeado";
import BotonVolver from "../atoms/botones/BotonVolver";

const ProductosTemplate = ({ titulo = "Productos", productos = [] }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver label="← Volver a categorías" ruta="/catalogo" />

        <TituloRedondeado texto={titulo} />

        <ProductosLista productos={productos} />
      </main>

      <Footer />
    </div>
  );
};

export default ProductosTemplate;