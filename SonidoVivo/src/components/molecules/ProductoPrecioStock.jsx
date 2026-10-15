import ProductoPrecio from "../atoms/productos/ProductoPrecio";
import ProductoStock from "../atoms/productos/ProductoStock";

const ProductoPrecioStock = ({ producto }) => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
      <ProductoPrecio precio={producto.precio} />

      <ProductoStock stock={producto.stock} />
    </div>
  );
};

export default ProductoPrecioStock;