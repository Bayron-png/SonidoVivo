import { useState } from "react";
import InputGroup from "../../atoms/producto-form/InputGroup";
import TextAreaGroup from "../../atoms/producto-form/TextAreaGroup";
import ButtonAction from "../../atoms/botones/ButtonAction";
import { useCategorias } from "../../../context/CategoriaContext";
import {
  validarNombreProducto,
  validarModelo,
  validarCategoria,
  validarPrecio,
  validarStock,
  validarImagen,
} from "../../../utils/validaciones/validacionFormProducto";

const FormularioProducto = ({
  formData,
  onChange,
  onSubmit,
  onCancel,
  esEdicion = false,
  sinCambios = false,
}) => {
  const [intentoEnvio, setIntentoEnvio] = useState(false);

  // Obtener las categorías compartidas desde el contexto
  const { categorias } = useCategorias();

  const errorCategoria = validarCategoria(formData.categoriaSlug);

  const hayErrores =
    validarNombreProducto(formData.nombre) ||
    validarModelo(formData.modelo) ||
    errorCategoria ||
    validarPrecio(formData.precio) ||
    validarStock(formData.stock) ||
    validarImagen(formData.imagen);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sinCambios) return;

    setIntentoEnvio(true);

    if (hayErrores) return;

    onSubmit(e);
  };

  return (
    <form id="formulario-producto" onSubmit={handleSubmit} noValidate>
      {/* Nombre */}
      <InputGroup
        label="Nombre del Producto"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={onChange}
        placeholder="Ej: Guitarra Fender Stratocaster"
        required
        validar={validarNombreProducto}
        mostrarErrores={intentoEnvio}
      />

      {/* Modelo */}
      <InputGroup
        label="Modelo"
        id="modelo"
        name="modelo"
        value={formData.modelo}
        onChange={onChange}
        placeholder="Ej: Player Stratocaster"
        required
        validar={validarModelo}
        mostrarErrores={intentoEnvio}
      />

      {/* Categoría y Precio */}
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="categoriaSlug" className="form-label fw-bold">
              Categoría <span className="text-danger">*</span>
            </label>

            <select
              id="categoriaSlug"
              name="categoriaSlug"
              className={`form-select ${
                intentoEnvio && errorCategoria ? "is-invalid" : ""
              }`}
              value={formData.categoriaSlug}
              onChange={onChange}
              required
            >
              <option value="">Selecciona una categoría</option>

              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.slug}>
                  {categoria.titulo}
                </option>
              ))}
            </select>

            {intentoEnvio && errorCategoria && (
              <div className="invalid-feedback">{errorCategoria}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <InputGroup
            label="Precio ($)"
            id="precio"
            name="precio"
            type="number"
            min="0"
            value={formData.precio}
            onChange={onChange}
            placeholder="0"
            required
            validar={validarPrecio}
            mostrarErrores={intentoEnvio}
          />
        </div>
      </div>

      {/* Stock e imagen */}
      <div className="row">
        <div className="col-md-6">
          <InputGroup
            label="Stock Disponible"
            id="stock"
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={onChange}
            placeholder="0"
            required
            validar={validarStock}
            mostrarErrores={intentoEnvio}
          />
        </div>

        <div className="col-md-6">
          <InputGroup
            label="URL de la Imagen"
            id="imagen"
            name="imagen"
            value={formData.imagen}
            onChange={onChange}
            placeholder="https://..."
            validar={validarImagen}
            mostrarErrores={intentoEnvio}
          />
        </div>
      </div>

      {/* Descripción */}
      <TextAreaGroup
        label="Descripción"
        id="descripcion"
        name="descripcion"
        value={formData.descripcion}
        onChange={onChange}
        placeholder="Descripción detallada del producto..."
      />

      {/* Botones */}
      <div className="d-flex justify-content-end gap-2 mt-4">
        {onCancel && (
          <ButtonAction variant="outline-secondary" onClick={onCancel}>
            Cancelar
          </ButtonAction>
        )}

        <ButtonAction type="submit" variant="primary" disabled={sinCambios}>
          {esEdicion ? "Guardar Cambios" : "Crear Producto"}
        </ButtonAction>
      </div>
    </form>
  );
};

export default FormularioProducto;
