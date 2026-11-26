import { Link } from "react-router-dom";
import InsigniaStock from "../../atoms/producto-form/InsigniaStock";

function TablaItemsCriticos({ productos }) {
  if (productos.length === 0) {
    return (
      <p className="alert alert-success" role="status">
        No existen productos con stock crítico.
      </p>
    );
  }

  return (
    <section aria-labelledby="titulo-items-criticos">
      <h3 id="titulo-items-criticos" className="h4 mb-3">
        Productos críticos
      </h3>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Categoría</th>
              <th scope="col">Stock</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>{producto.stock}</td>
                <td>
                  <InsigniaStock stock={producto.stock} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link
        to="/admin/gestion-productos"
        className="btn dashboard-boton mt-3"
      >
        Gestionar productos
      </Link>
    </section>
  );
}

export default TablaItemsCriticos;