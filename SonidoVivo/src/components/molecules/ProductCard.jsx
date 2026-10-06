const ProductCard = ({ producto }) => {
  const disponible = producto.stock > 0;

  return (
    <article className="card h-100 shadow-sm">
      <section className="card-body d-flex flex-column">
        
        <header className="mb-3">
          <p className="text-muted small mb-1">
            {producto.categoria}
          </p>

          <h2 className="card-title h5">
            {producto.nombre}
          </h2>
        </header>

        <section aria-label="Información del producto">
          <p className="card-text mb-1">
            <strong>Marca:</strong> {producto.marca}
          </p>

          <p className="card-text mb-1">
            <strong>Modelo:</strong> {producto.modelo}
          </p>

          <p className="card-text text-muted">
            {producto.descripcion}
          </p>
        </section>

        <footer className="mt-auto">
          <p className="h5 fw-bold mb-2">
            ${producto.precio.toLocaleString("es-CL")}
          </p>

          <p
            className={disponible ? "text-success" : "text-danger"}
            aria-label={`Disponibilidad: ${
              disponible ? `${producto.stock} unidades` : "sin stock"
            }`}
          >
            {disponible
              ? `Stock: ${producto.stock}`
              : "Sin stock"}
          </p>

          <button
            type="button"
            className="btn btn-primary w-100"
            disabled={!disponible}
          >
            Agregar al carrito
          </button>
        </footer>

      </section>
    </article>
  );
};

export default ProductCard;