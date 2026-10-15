import ProductCard from "../molecules/ProductCard";
import MensajeSinProductos from "../atoms/productos/MensajeSinProductos";
import { useCart } from "../../context/CarritoContext";

const ProductosLista = ({ productos: productosFiltrados }) => {
  const { productos: productosContext } = useCart();
  const productosAMostrar = productosFiltrados
    ? productosFiltrados.map(
        (p) => productosContext.find((item) => item.id === p.id) || p
      )
    : productosContext;

  // Validación de lista vacía
  if (!productosAMostrar || productosAMostrar.length === 0) {
    return <MensajeSinProductos mensaje="No hay productos registrados en esta categoría." />;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {productosAMostrar.map((producto) => (
        <div className="col" key={producto.id}>
          <ProductCard producto={producto} />
        </div>
      ))}
    </div>
  );
};

export default ProductosLista;