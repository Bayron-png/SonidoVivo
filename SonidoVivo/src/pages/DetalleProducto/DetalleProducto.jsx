import { Link, useParams } from "react-router-dom";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import BotonAgregarAlCarrito from "../../components/atoms/botones/BotonAgregarAlCarrito";
import { useProductos } from "../../context/ProductoContext";
import categoriasData from "../../data/categoriasData";

const DetalleProducto = () => {
  const { categoriaSlug, productoId } = useParams();
  const { productosTodos } = useProductos();

  const producto = productosTodos.find((p) => p.id === productoId);

  const categoria = categoriasData.find(
    (cat) => cat.slug === categoriaSlug
  );

  if (!producto) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 container py-5">
          <div className="alert alert-warning text-center" role="alert">
            <h1 className="h4">Producto no encontrado</h1>
            <p className="mb-3">
              El producto que buscas no existe o ya no está disponible.
            </p>
            <Link to="/catalogo" className="btn btn-primary">
              Volver al catálogo
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const disponible = producto.stock > 0;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container py-5">
        <div className="mb-4">
          <Link
            to={`/catalogo/${producto.categoriaSlug}`}
            className="btn btn-primary"
          >
            ← Volver a {categoria?.titulo || producto.categoria}
          </Link>
        </div>

        <div className="card shadow-sm border-0 overflow-hidden">
          <div className="row g-0">
            <div className="col-12 col-md-6 bg-light d-flex align-items-center justify-content-center p-4 p-md-5">
              {producto.imagen && (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              )}
            </div>

            <div className="col-12 col-md-6">
              <div className="card-body p-4 p-md-5">
                <p className="text-muted mb-2">{producto.categoria}</p>

                <h1 className="display-6 fw-bold mb-3">
                  {producto.nombre}
                </h1>

                <div className="mb-4">
                  <p className="mb-2">
                    <strong>Marca:</strong> {producto.marca}
                  </p>
                  <p className="mb-2">
                    <strong>Modelo:</strong> {producto.modelo}
                  </p>
                  <p className="text-muted mb-0">
                    {producto.descripcion}
                  </p>
                </div>

                <hr />

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                  <span className="display-6 fw-bold">
                    ${producto.precio.toLocaleString("es-CL")}
                  </span>

                  <span
                    className={`badge fs-6 ${
                      disponible ? "text-bg-success" : "text-bg-danger"
                    }`}
                  >
                    {disponible
                      ? `Stock: ${producto.stock}`
                      : "Sin stock"}
                  </span>
                </div>

                <BotonAgregarAlCarrito
                  productoId={producto.id}
                  disponible={disponible}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetalleProducto;
