import { Link } from "react-router-dom";
import { useProductos } from "../../../context/ProductoContext";
import { useMovimientos } from "../../../context/MovimientosContext";
import categoriasData from "../../../data/categoriasData";
import TarjetaResumen from "../../molecules/admin/TarjetaResumen";
import Descripcion from "../../atoms/Descripcion";

function ResumenDashboard() {
  const { productosTodos } = useProductos();
  const { movimientos } = useMovimientos();

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
      titulo: "Solicitudes",
      valor: movimientos.length,
      descripcion: "Compras registradas durante esta sesión",
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
    </>
  );
}

export default ResumenDashboard;
