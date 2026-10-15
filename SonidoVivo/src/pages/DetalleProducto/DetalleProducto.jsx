import { Link, useParams } from "react-router-dom";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import DetalleProductoTemplate from "../../components/templates/DetalleProductoTemplate";
import { useProductos } from "../../context/ProductoContext";
import categoriasData from "../../data/categoriasData";

const DetalleProducto = () => {
  const { categoriaSlug, productoId } = useParams();

  const { productosTodos } = useProductos();

  const producto = productosTodos.find(
    (p) => p.id === productoId
  );

  const categoria = categoriasData.find(
    (cat) => cat.slug === categoriaSlug
  );

  if (!producto) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 container py-5">
          <div
            className="alert alert-warning text-center"
            role="alert"
          >
            <h1 className="h4">
              Producto no encontrado
            </h1>

            <p className="mb-3">
              El producto que buscas no existe o ya no está disponible.
            </p>

            <Link
              to="/catalogo"
              className="btn btn-primary"
            >
              Volver al catálogo
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <DetalleProductoTemplate
      producto={producto}
      categoria={categoria}
    />
  );
};

export default DetalleProducto;
