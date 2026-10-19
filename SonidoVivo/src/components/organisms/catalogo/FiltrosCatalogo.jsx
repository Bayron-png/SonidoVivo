import categoriasData from "../../../data/categoriasData";

const FiltrosCatalogo = ({
  categoriaSeleccionada = "",
  onCategoriaChange,
  disponibilidad = "todos",
  onDisponibilidadChange
}) => {
  return (
    <aside className="border rounded p-3">
      <h5>Filtrar por</h5>

      <hr />

      <label htmlFor="filtro-categoria" className="form-label fw-semibold">
        Categoría
      </label>
      <select
        id="filtro-categoria"
        className="form-select mb-3"
        value={categoriaSeleccionada}
        onChange={(e) => onCategoriaChange(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categoriasData.map((categoria) => (
          <option key={categoria.id} value={categoria.slug}>
            {categoria.titulo}
          </option>
        ))}
      </select>

      <label htmlFor="filtro-disponibilidad" className="form-label fw-semibold">
        Disponibilidad
      </label>
      <select
        id="filtro-disponibilidad"
        className="form-select"
        value={disponibilidad}
        onChange={(e) => onDisponibilidadChange(e.target.value)}
      >
        <option value="todos">Todos los productos</option>
        <option value="disponibles">En stock</option>
        <option value="agotados">Agotados</option>
      </select>
    </aside>
  );
};

export default FiltrosCatalogo;
