const ProductCard = ({ producto }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <span className="text-muted small mb-2">
          {producto.categoria}
        </span>

        <h5 className="card-title">{producto.nombre}</h5>

        <p className="card-text mb-1">
          <strong>Marca:</strong> {producto.marca}
        </p>

        <p className="card-text mb-1">
          <strong>Modelo:</strong> {producto.modelo}
        </p>

        <p className="card-text text-muted">
          {producto.descripcion}
        </p>

        <div className="mt-auto">
          <h5 className="fw-bold">
            ${producto.precio.toLocaleString("es-CL")}
          </h5>

          <p
            className={
              producto.stock > 0
                ? "text-success mb-3"
                : "text-danger mb-3"
            }
          >
            {producto.stock > 0
              ? `Stock: ${producto.stock}`
              : "Sin stock"}
          </p>

          <button
            className="btn btn-primary w-100"
            disabled={producto.stock === 0}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;