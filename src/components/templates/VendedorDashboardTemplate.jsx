import { useState } from "react";
import TituloRedondeado from "../atoms/TituloRedondeado";
import MensajeSinMovimientos from "../atoms/movimientos/MensajeSinMovimientos";
import EstadoConsulta from "../molecules/estados/EstadoConsulta";
import ListaMovimientos from "../organisms/movimientos/ListaMovimientos";

const VendedorDashboardTemplate = ({
  categorias,
  categoriaSeleccionada,
  seleccionarCategoria,
  productos,
  cargandoProductos,
  errorProductos,
  cargarProductos,
  ajustarStock,
  ajustesPendientes,
  erroresStock,
  pedidos,
  cargandoPedidos,
  errorPedidos,
  cargarPedidos,
  actualizarEstadoPedido,
}) => {
  const [vistaActiva, setVistaActiva] = useState("categorias");

  return (
    <div className="container flex-grow-1 py-4">
      <header className="mb-4">
        <TituloRedondeado texto="Panel de vendedor" />
      </header>

      <nav className="nav nav-pills gap-2 mb-4" aria-label="Secciones del vendedor">
        <button
          type="button"
          className={`nav-link ${vistaActiva === "categorias" ? "active" : ""}`}
          aria-pressed={vistaActiva === "categorias"}
          onClick={() => setVistaActiva("categorias")}
        >
          Categorías
        </button>
        <button
          type="button"
          className={`nav-link ${vistaActiva === "pedidos" ? "active" : ""}`}
          aria-pressed={vistaActiva === "pedidos"}
          onClick={() => setVistaActiva("pedidos")}
        >
          Pedidos
        </button>
      </nav>

      {vistaActiva === "categorias" && (
        <>
          <section aria-labelledby="categorias-vendedor" className="mb-5">
            <h2 id="categorias-vendedor" className="h4 mb-3">
              Categorías
            </h2>
            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                className={`btn ${
                  categoriaSeleccionada === ""
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                aria-pressed={categoriaSeleccionada === ""}
                onClick={() => seleccionarCategoria("")}
              >
                Todas
              </button>
              {categorias.map((categoria) => (
                <button
                  type="button"
                  className={`btn ${
                    categoriaSeleccionada === categoria.slug
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  aria-pressed={categoriaSeleccionada === categoria.slug}
                  key={categoria.id}
                  onClick={() => seleccionarCategoria(categoria.slug)}
                >
                  {categoria.titulo}
                </button>
              ))}
            </div>
          </section>

          <section aria-labelledby="productos-vendedor" className="mb-5">
            <h2 id="productos-vendedor" className="h4 mb-3">
              Productos y stock
            </h2>

            <EstadoConsulta
              cargando={cargandoProductos}
              error={errorProductos}
              onReintentar={cargarProductos}
              mensajeCarga="Cargando productos..."
            />

            {!cargandoProductos && !errorProductos && productos.length === 0 && (
              <p className="alert alert-info" role="status">
                No hay productos en esta categoría.
              </p>
            )}

            {!cargandoProductos && !errorProductos && productos.length > 0 && (
              <div className="row g-3">
                {productos.map((producto) => {
                  const nombre =
                    producto.nombre || producto.name || producto.id;
                  const stock = Number(producto.stock);
                  const pendiente = ajustesPendientes.has(
                    String(producto.id),
                  );
                  const errorStock = erroresStock[String(producto.id)];

                  return (
                    <div className="col-12 col-md-6 col-xl-4" key={producto.id}>
                      <article className="card h-100 shadow-sm">
                        {producto.imagen && (
                          <img
                            src={producto.imagen}
                            className="card-img-top p-3"
                            alt={nombre}
                            style={{ height: 190, objectFit: "contain" }}
                          />
                        )}
                        <div className="card-body d-flex flex-column">
                          <h3 className="h5 card-title">{nombre}</h3>
                          <p className="text-muted mb-2">
                            {producto.categoria || "Sin categoría"}
                          </p>
                          {producto.modelo && (
                            <p className="mb-2">Modelo: {producto.modelo}</p>
                          )}
                          <p className="fw-semibold mb-3">
                            Stock disponible: {stock}
                          </p>

                          <div className="d-flex align-items-center gap-2 mt-auto">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              aria-label={`Descontar una unidad de ${nombre}`}
                              disabled={pendiente || stock <= 0}
                              onClick={() => ajustarStock(producto, -1)}
                            >
                              −
                            </button>
                            <span aria-live="polite">{stock}</span>
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              aria-label={`Sumar una unidad a ${nombre}`}
                              disabled={pendiente || stock >= 2147483647}
                              onClick={() => ajustarStock(producto, 1)}
                            >
                              +
                            </button>
                            {pendiente && (
                              <span className="small text-muted" role="status">
                                Guardando...
                              </span>
                            )}
                          </div>

                          {errorStock && (
                            <p
                              className="alert alert-danger mt-3 mb-0"
                              role="alert"
                            >
                              {errorStock}
                            </p>
                          )}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}

      {vistaActiva === "pedidos" && (
        <section aria-label="Historial de pedidos">
          <header className="mb-3">
            <TituloRedondeado texto="Historial de pedidos" />
          </header>

          <EstadoConsulta
            cargando={cargandoPedidos}
            error={errorPedidos}
            onReintentar={cargarPedidos}
            mensajeCarga="Cargando pedidos..."
          />

          {!cargandoPedidos && !errorPedidos && pedidos.length === 0 && (
            <MensajeSinMovimientos />
          )}

          {!cargandoPedidos && !errorPedidos && pedidos.length > 0 && (
            <ListaMovimientos
              movimientos={pedidos}
              actualizarEstadoPedido={actualizarEstadoPedido}
            />
          )}
        </section>
      )}
    </div>
  );
};

export default VendedorDashboardTemplate;
