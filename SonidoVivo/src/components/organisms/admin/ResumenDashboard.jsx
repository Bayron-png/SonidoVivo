import { Link } from "react-router-dom";
import { useProductos } from "../../../context/ProductoContext";
import { useMovimientos } from "../../../context/MovimientosContext";
import categoriasData from "../../../data/categoriasData";
import TarjetaResumen from "../../molecules/admin/TarjetaResumen";

function ResumenDashboard() {
  const { productosTodos } = useProductos();
  const { movimientos } = useMovimientos();

  const productosCriticos = productosTodos.filter(
    (producto) => Number(producto.stock) <= 5
  ).length;

  const indicadores = [
    {
      titulo: "Productos",
      valor: productosTodos.length,
      descripcion: "Productos registrados en el catálogo"
    },
    {
      titulo: "Solicitudes",
      valor: movimientos.length,
      descripcion: "Compras registradas durante esta sesión"
    },
    {
      titulo: "Stock crítico",
      valor: productosCriticos,
      descripcion: "Productos con 5 unidades o menos"
    },
    {
      titulo: "Categorías",
      valor: categoriasData.length,
      descripcion: "Categorías disponibles en el catálogo"
    }
  ];

  return (
    <>
      <section
        className="mb-5"
        aria-labelledby="resumen-tienda"
      >
        <h3 id="resumen-tienda" className="h4 mb-4">
          Resumen de la tienda
        </h3>

        <div className="row g-4">
          {indicadores.map((indicador) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={indicador.titulo}
            >
              <TarjetaResumen
                titulo={indicador.titulo}
                valor={indicador.valor}
                descripcion={indicador.descripcion}
              />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="accesos-admin">
        <h3 id="accesos-admin" className="h4 mb-3">
          Accesos administrativos
        </h3>

        <nav
          aria-label="Accesos rápidos del administrador"
          className="d-flex flex-wrap gap-3"
        >
          <Link
            to="/admin"
            className="btn dashboard-boton"
          >
            Gestionar productos
          </Link>

          <Link
            to="/movimientos"
            className="btn dashboard-boton"
          >
            Ver movimientos
          </Link>
        </nav>

        <p className="text-muted small mt-4">
          La gestión de usuarios y los reportes estarán
          disponibles en próximas etapas del proyecto.
        </p>
      </section>
    </>
  );
}

export default ResumenDashboard;