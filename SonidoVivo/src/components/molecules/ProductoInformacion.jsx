import ProductoCategoria from "../atoms/productos/ProductoCategoria";

const ProductoInformacion = ({ producto }) => {
  return (
    <div className="mb-4">
      <ProductoCategoria categoria={producto.categoria} />

      <h1 className="display-6 fw-bold mb-3">
        {producto.nombre}
      </h1>

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
  );
};

export default ProductoInformacion;