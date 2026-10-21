import { useProductos } from "../../context/ProductoContext";
import TituloRedondeado from "../atoms/TituloRedondeado";
import Descripcion from "../atoms/Descripcion";
import TablaItemsCriticos from "../organisms/admin/TablaItemsCriticos";

function ItemsCriticosTemplate() {
  const { productosTodos } = useProductos();

  const productosCriticos = productosTodos
    .filter((producto) => Number(producto.stock) <= 5)
    .sort((a, b) => Number(a.stock) - Number(b.stock));

  const agotados = productosCriticos.filter(
    (producto) => Number(producto.stock) === 0
  ).length;

  const stockBajo = productosCriticos.length - agotados;

  return (
    <section aria-label="Gestión de ítems críticos">
      <header className="mb-4">
        <TituloRedondeado texto="Ítems críticos" />

        <Descripcion
          texto="Revisa los productos agotados o con cinco unidades o menos."
        />
      </header>

      <div className="row g-3 mb-5">
        <div className="col-12 col-md-6">
          <article className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Stock bajo</h3>
              <p className="fs-2 fw-bold dashboard-valor mb-0">
                {stockBajo}
              </p>
              <p className="text-muted small mb-0">
                Productos con 1 a 5 unidades
              </p>
            </div>
          </article>
        </div>

        <div className="col-12 col-md-6">
          <article className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Agotados</h3>
              <p className="fs-2 fw-bold dashboard-valor mb-0">
                {agotados}
              </p>
              <p className="text-muted small mb-0">
                Productos sin unidades disponibles
              </p>
            </div>
          </article>
        </div>
      </div>

      <TablaItemsCriticos productos={productosCriticos} />
    </section>
  );
}

export default ItemsCriticosTemplate;