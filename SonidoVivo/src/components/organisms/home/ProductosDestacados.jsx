
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CarritoContext";
import ProductCard from "../../molecules/ProductCard";

const ProductosDestacados = () => {
  const { productos } = useCart();

  const productosDestacadosIds = [
    "GE001",
    "BT002",
    "TC001",
    "MI001"
  ];

  const destacados = productosDestacadosIds
    .map((id) => productos.find((producto) => producto.id === id))
    .filter(Boolean);

  return (
    <section
      className="home-productos my-5"
      aria-labelledby="titulo-productos-destacados"
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h2
            id="titulo-productos-destacados"
            className="fw-bold mb-2"
          >
            Productos destacados
          </h2>

          <p className="text-muted mb-0">
            Encuentra el instrumento ideal para crear
            tu próximo sonido.
          </p>
        </div>

        <Link
          to="/catalogo"
          className="btn home-ver-catalogo"
        >
          Ver catálogo completo
        </Link>
      </div>

      <div className="row g-4">
        {destacados.map((producto) => (
          <div
            className="col-12 col-sm-6 col-lg-3"
            key={producto.id}
          >
            <ProductCard
              producto={producto}
              variante="compacta"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
