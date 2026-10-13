
import BotonAgregarAlCarrito from "../atoms/botones/BotonAgregarAlCarrito";

const ProductCard = ({ producto, variante = "completa" }) => {
  const disponible = producto.stock > 0;
  const esCompacta = variante === "compacta";

  return (
    <article
      className={`card h-100 shadow-sm ${
        esCompacta ? "home-producto-card" : ""
      }`}
    >
      {producto.imagen && (
        <div className="text-center p-3 bg-light border-bottom">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="card-img-top"
            style={{
              height: esCompacta ? "175px" : "160px",
              objectFit: "contain"
            }}
            loading="lazy"
          />
        </div>
      )}

      <section className="card-body d-flex flex-column">
        <header className="mb-2">
          <p className="text-muted small mb-1">
            {producto.categoria}
          </p>

          <h3 className="card-title h6 fw-bold text-dark">
            {producto.nombre}
          </h3>
        </header>

        {!esCompacta && (
          <div className="mb-3">
            <p className="card-text small mb-1">
              <strong>Marca:</strong> {producto.marca} |
              <strong> Modelo:</strong> {producto.modelo}
            </p>

            <p className="card-text small text-muted">
              {producto.descripcion}
            </p>
          </div>
        )}

        <div className="mt-auto pt-2">
          <p className="h5 fw-bold mb-2">
            ${producto.precio.toLocaleString("es-CL")}
          </p>

          <p
            className={`small mb-2 ${
              disponible ? "text-success" : "text-danger"
            }`}
          >
            {disponible
              ? `Stock: ${producto.stock}`
              : "Sin stock"}
          </p>

          <BotonAgregarAlCarrito
            productoId={producto.id}
            disponible={disponible}
          />
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
