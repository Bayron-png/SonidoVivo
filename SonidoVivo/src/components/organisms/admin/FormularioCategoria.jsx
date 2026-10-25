
import { useEffect, useState } from "react";
import ButtonAction from "../../atoms/botones/ButtonAction";
import { validarFormatoSlug, validarNombreCategoria, validarUrlImagenCategoria } from "../../../utils/validaciones/validacionFormCategoria";
import InputGroup from "../../atoms/producto-form/InputGroup";
import { useCategorias } from "../../../context/CategoriaContext";

const FormularioCategoria = ({
  formulario,
  categoriaEditando,
  manejarCambio,
  manejarEnvio,
  limpiarFormulario,
}) => {
  const editando = categoriaEditando !== null;

  const { categorias } = useCategorias();

  // categoriaEditando es un id: se busca la categoría original para comparar
  const categoriaOriginal = editando
    ? categorias.find((c) => String(c.id) === String(categoriaEditando))
    : null;

  const bloquearEnvio =
    !!categoriaOriginal &&
    formulario.titulo.trim() === categoriaOriginal.titulo &&
    formulario.slug.trim() === categoriaOriginal.slug &&
    formulario.src.trim() === categoriaOriginal.src;
  
  const [mostrarErrores, setMostrarErrores] = useState(false);

  const [version, setVersion] = useState(0);

  // Cambiar este número remonta los campos, así reinician su estado
  // interno "interactuando" (si no, quedarían en rojo tras limpiar).
  const reiniciarValidacion = () => {
    setMostrarErrores(false);
    setVersion((v) => v + 1);
  };
 
  // Al empezar a editar otra categoría o cancelar la edición
  useEffect(() => {
    reiniciarValidacion();
  }, [categoriaEditando]);

  const manejarEnvioValidado = (evento) => {
    evento.preventDefault();

    if (bloquearEnvio) return;

    const hayErrores =
      validarNombreCategoria(formulario.titulo) ||
      validarFormatoSlug(formulario.slug) ||
      validarUrlImagenCategoria(formulario.src);

    if (hayErrores) {
      setMostrarErrores(true);
      return;
    }

    manejarEnvio(evento);
    reiniciarValidacion();

  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold mb-3">
          {editando ? "Editar categoría" : "Nueva categoría"}
        </h2>

        {/* noValidate: evita los globos del navegador para que se vean
            los mensajes de nuestras validaciones */}
        <form onSubmit={manejarEnvioValidado} noValidate key={version}>
           <InputGroup
            label="Nombre"
            id="titulo"
            name="titulo"
            value={formulario.titulo}
            onChange={manejarCambio}
            placeholder="Ej. Guitarras Acústicas"
            required
            validar={validarNombreCategoria}
            mostrarErrores={mostrarErrores}
          />

          <InputGroup
            label="Slug"
            id="slug"
            name="slug"
            value={formulario.slug}
            onChange={manejarCambio}
            placeholder="guitarras-acusticas"
            required
            validar={validarFormatoSlug}
            mostrarErrores={mostrarErrores}
          />

          <div className="form-text">
            Se utiliza en la dirección del catálogo.
          </div>

          <InputGroup
            label="Ruta de la imagen"
            id="src"
            name="src"
            value={formulario.src}
            onChange={manejarCambio}
            placeholder="categorias-catalogo/guitarra-acustica.png"
            required
            validar={validarUrlImagenCategoria}
            mostrarErrores={mostrarErrores}
          />

          <div className="d-flex flex-wrap gap-2">
            <ButtonAction 
              type="submit"
              variant="primary"
              disabled={bloquearEnvio}
            >
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
