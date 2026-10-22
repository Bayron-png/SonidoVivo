import { Link } from "react-router-dom";
import { useProductos } from "../../../context/ProductoContext";
import Descripcion from "../../atoms/Descripcion";
import ProductCard from "../../molecules/catalogo/ProductCard";
import TituloSeccion from "../../atoms/TituloSeccion";

const ProductosDestacados = () => {
  const { productosTodos } = useProductos();

  const productosDestacadosIds = ["GE001", "BT002", "TC001", "MI001"];

  const destacados = productosDestacadosIds
    .map((id) => productosTodos.find((producto) => producto.id === id))
    .filter(Boolean);

  return (
    <section
      className="home-productos my-5"
      aria-labelledby="titulo-productos-destacados"
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <TituloSeccion texto = "Productos destacados"/>

          <Descripcion texto="Encuentra el instrumento ideal para crear tu próximo sonido." />
        </div>

        <Link to="/catalogo" className="btn home-ver-catalogo">
          Ver catálogo completo
        </Link>
      </div>

      <div className="row g-4">
        {destacados.map((producto) => (
          <div className="col-12 col-sm-6 col-lg-3" key={producto.id}>
            <ProductCard producto={producto} variante="compacta" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
