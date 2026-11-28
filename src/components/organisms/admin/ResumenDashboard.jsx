import { Link } from "react-router-dom";
import { useProductos } from "../../../context/ProductoContext";
import categoriasData from "../../../data/categoriasData";
import TarjetaResumen from "../../molecules/admin/TarjetaResumen";
import Descripcion from "../../atoms/Descripcion";

function ResumenDashboard({
  pedidos,
  cargandoPedidos,
  errorPedidos,
  cargarPedidos
}) {
  const { productosTodos } = useProductos();

  const productosCriticos = productosTodos.filter(
    (producto) => Number(producto.stock) <= 5,
  ).length;

  const indicadores = [
    {
      titulo: "Productos",
      valor: productosTodos.length,
      descripcion: "Productos registrados en el catálogo",
    },
    {
      titulo: "Pedidos",
      valor: cargandoPedidos ? "…" : errorPedidos ? "—" : pedidos.length,
      descripcion: "Pedidos registrados en la base de datos",
    },
    {
      titulo: "Stock crítico",
      valor: productosCriticos,
      descripcion: "Productos con 5 unidades o menos",
    },
    {
      titulo: "Categorías",
      valor: categoriasData.length,
      descripcion: "Categorías disponibles en el catálogo",
    },
  ];

  return (
    <>
      <section className="mb-5" aria-labelledby="resumen-tienda">
        <h3 id="resumen-tienda" className="h4 mb-4">
          Resumen de la tienda
        </h3>

        <div className="row g-4">
          {indicadores.map((indicador) => (
            <div className="col-12 col-sm-6 col-lg-3" key={indicador.titulo}>
              <TarjetaResumen
                titulo={indicador.titulo}
                valor={indicador.valor}
                descripcion={indicador.descripcion}
              />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="pedidos-recientes">
        <h3 id="pedidos-recientes" className="h4 mb-4">
          Pedidos recientes
        </h3>

        {cargandoPedidos && (
          <p role="status" aria-live="polite">
            Cargando pedidos...
          </p>
        )}

        {errorPedidos && (
          <div className="alert alert-danger" role="alert">
            <p className="mb-2">{errorPedidos}</p>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={cargarPedidos}
            >
              Reintentar
            </button>
          </div>
        )}

        {!cargandoPedidos && !errorPedidos && pedidos.length === 0 && (
          <p className="alert alert-info" role="status">
            No hay pedidos registrados.
          </p>
        )}

        {!cargandoPedidos && !errorPedidos && pedidos.length > 0 && (
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th scope="col">Pedido</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Tipo de envío</th>
                  <th scope="col">Total</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.slice(0, 5).map((pedido) => (
                  <tr key={pedido.id}>
                    <th scope="row">#{pedido.id}</th>
                    <td>
                      <span className="d-block">{pedido.cliente_nombre}</span>
                      <small className="text-muted">{pedido.cliente_correo}</small>
                    </td>
                    <td>{pedido.estado}</td>
                    <td>{pedido.tipo_envio}</td>
                    <td>${Number(pedido.total).toLocaleString("es-CL")}</td>
                    <td>
                      {new Date(pedido.creado_en).toLocaleString("es-CL")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}

export default ResumenDashboard;
