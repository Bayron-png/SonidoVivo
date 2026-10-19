
const FiltrosCatalogo = () => {
  return (
    <aside className="border rounded p-3">
      <h5>Filtrar por</h5>

      <hr />

      <h6>Categoría</h6>
      <select className="form-select mb-3" defaultValue="">
        <option value="">Todas las categorías</option>
        <option value="guitarras">Guitarras</option>
        <option value="bajos">Bajos</option>
        <option value="baterias">Baterías</option>
        <option value="amplificadores">Amplificadores</option>
      </select>

      <h6>Disponibilidad</h6>
      <select className="form-select" defaultValue="todos">
        <option value="todos">Todos los productos</option>
        <option value="disponibles">En stock</option>
        <option value="agotados">Agotados</option>
      </select>
    </aside>
  );
};

export default FiltrosCatalogo;
