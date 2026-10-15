import React from "react";
import InputGroup from "../../atoms/producto-form/InputGroup";
import TextAreaGroup from "../../atoms/producto-form/TextAreaGroup";
import ButtonAction from "../../atoms/botones/ButtonAction";
import categoriasData from "../../../data/categoriasData";

const FormularioProducto = ({
  formData,
  onChange,
  onSubmit,
  onCancel,
  esEdicion = false
}) => {
  return (
    <form id="formulario-producto" onSubmit={onSubmit}>
      {/* Nombre */}
      <InputGroup
        label="Nombre del Producto"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={onChange}
        placeholder="Ej: Guitarra Fender Stratocaster"
        required
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
      />

      {/* Categoría y Precio */}
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="categoriaSlug" className="form-label">
              Categoría
            </label>

            <select
              id="categoriaSlug"
              name="categoriaSlug"
              className="form-select"
              value={formData.categoriaSlug}
              onChange={onChange}
              required
            >
              <option value="">Selecciona una categoría</option>

              {categoriasData.map((categoria) => (
                <option key={categoria.id} value={categoria.slug}>
                  {categoria.titulo}
                </option>
              ))}
            </select>
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
          />
        </div>
      </div>

      {/* Stock e Imagen URL */}
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

        <ButtonAction type="submit" variant="primary">
          {esEdicion ? "Guardar Cambios" : "Crear Producto"}
        </ButtonAction>
      </div>
    </form>
  );
};

export default FormularioProducto;