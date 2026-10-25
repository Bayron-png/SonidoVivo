
import BarraBusqueda from "../../molecules/admin-productos/BarraBusqueda";
import ButtonAction from "../../atoms/botones/ButtonAction";
import VentanaConfirmacion from "../admin/VentanaConfirmacion";

const TablaCategorias = ({
  categoriasFiltradas,
  busqueda,
  setBusqueda,
  prepararEdicion,
  solicitarEliminacion,
  categoriaPorEliminar,
  cancelarEliminacion,
  confirmarEliminacion,
}) => {
  return (
    <>
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h2 className="h5 fw-bold mb-3">
            Categorías registradas
          </h2>

          <div className="mb-3">
            <BarraBusqueda
              busqueda={busqueda}
              setBusqueda={setBusqueda}
            />
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Slug</th>
                  <th className="text-end">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {categoriasFiltradas.map((categoria) => (
                  <tr key={categoria.id}>
                    <td>
                      <img
                        src={`/${categoria.src.replace(/^\/+/, "")}`}
                        alt={categoria.titulo}
                        width="48"
                        height="48"
                        className="rounded border"
                        style={{ objectFit: "contain" }}
                      />
                    </td>

                    <td className="fw-semibold">
                      {categoria.titulo}
                    </td>

                    <td>
                      <code>{categoria.slug}</code>
                    </td>

                    <td>
                      <div className="d-flex justify-content-end gap-2">
                        <ButtonAction
                          type="button"
                          variant="outline-primary"
                          onClick={() => prepararEdicion(categoria)}
                        >
                          Editar
                        </ButtonAction>

                        <ButtonAction
                          type="button"
                          variant="outline-danger"
                          onClick={() => solicitarEliminacion(categoria)}
                        >
                          Eliminar
                        </ButtonAction>
                      </div>
                    </td>
                  </tr>
                ))}

                {categoriasFiltradas.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-4 text-muted"
                    >
                      No se encontraron categorías.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <VentanaConfirmacion
        mostrar={categoriaPorEliminar !== null}
        titulo="Eliminar categoría"
        mensaje="¿Estás seguro de que deseas eliminar esta categoría?"
        nombreItem={categoriaPorEliminar?.titulo ?? ""}
        onCancelar={cancelarEliminacion}
        onConfirmar={confirmarEliminacion}
        textoConfirmar="Eliminar"
        varianteConfirmar="danger"
      />
    </>
  );
};

export default TablaCategorias;
