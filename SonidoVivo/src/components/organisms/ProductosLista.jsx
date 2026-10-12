import ProductCard from "../molecules/ProductCard";
import MensajeSinProductos from "../atoms/productos/MensajeSinProductos";

const ProductosLista = ({ productos }) => {
  // Si no hay productos
  if (!productos || productos.length === 0) {
    return <MensajeSinProductos mensaje="No hay productos registrados en esta categoría." />;
  }

  // Si hay productos
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {productos.map((producto) => (
        <div className="col" key={producto.id}>
          <ProductCard producto={producto} />
        </div>
      ))}
    </div>
  );
};

export default ProductosLista;