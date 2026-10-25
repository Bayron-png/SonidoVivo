
import ButtonAction from "../../atoms/botones/ButtonAction";

const FormularioCategoria = ({
  formulario,
  categoriaEditando,
  manejarCambio,
  manejarEnvio,
  limpiarFormulario,
}) => {
  const editando = categoriaEditando !== null;

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold mb-3">
          {editando ? "Editar categoría" : "Nueva categoría"}
        </h2>

        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Nombre
            </label>

            <input
              id="titulo"
              name="titulo"
              className="form-control"
              value={formulario.titulo}
              onChange={manejarCambio}
              placeholder="Ej. Guitarras Acústicas"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="slug" className="form-label">
              Slug
            </label>

            <input
              id="slug"
              name="slug"
              className="form-control"
              value={formulario.slug}
              onChange={manejarCambio}
              placeholder="guitarras-acusticas"
              required
            />

            <div className="form-text">
              Se utiliza en la dirección del catálogo.
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="src" className="form-label">
              Ruta de la imagen
            </label>

            <input
              id="src"
              name="src"
              className="form-control"
              value={formulario.src}
              onChange={manejarCambio}
              placeholder="categorias-catalogo/guitarra-acustica.png"
              required
            />
          </div>

          <div className="d-flex flex-wrap gap-2">
            <ButtonAction type="submit" variant="primary">
              {editando ? "Guardar cambios" : "Agregar categoría"}
            </ButtonAction>

            {editando && (
              <ButtonAction
                type="button"
                variant="outline-secondary"
                onClick={limpiarFormulario}
              >
                Cancelar
              </ButtonAction>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioCategoria;
