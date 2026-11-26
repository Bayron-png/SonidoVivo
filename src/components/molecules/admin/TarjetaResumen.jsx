function TarjetaResumen({ titulo, valor, descripcion }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body">
        <h4 className="h6 fw-semibold">
          {titulo}
        </h4>

        <p className="dashboard-valor fs-2 fw-bold mb-2">
          {valor}
        </p>

        <p className="text-muted small mb-0">
          {descripcion}
        </p>
      </div>
    </article>
  );
}

export default TarjetaResumen;