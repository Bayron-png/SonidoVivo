import { useParams } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import ProductosLista from "../organisms/ProductosLista";
import TituloRedondeado from "../atoms/TituloRedondeado";
import BotonVolver from "../atoms/botones/BotonVolver";

import productosData from "../../data/productosData";
import categoriasData from "../../data/categoriasData";

const ProductosTemplate = () => {
  const { slug } = useParams();

  const categoriaActual = categoriasData.find((cat) => cat.slug === slug);

  const productosFiltrados = productosData.filter(
    (prod) => prod.categoriaSlug === slug
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver label="← Volver a Categorías" ruta ="/catalogo" />

        <TituloRedondeado
          texto={categoriaActual ? categoriaActual.titulo : "Productos"}
        />

        <ProductosLista productos={productosFiltrados} />
      </main>

      <Footer />
    </div>
  );
};

export default ProductosTemplate;