import React, {useState} from "react";
import InputGroup from "../../atoms/producto-form/InputGroup";
import TextAreaGroup from "../../atoms/producto-form/TextAreaGroup";
import ButtonAction from "../../atoms/botones/ButtonAction";
import categoriasData from "../../../data/categoriasData";
import {
  validarNombreProducto,
  validarModelo,
  validarCategoria,
  validarPrecio,
  validarStock,
  validarImagen,
} from "../../../utils/validaciones/validacionFormProducto";

// Este componente no guarda los datos del formulario. Los recibe del padre:
//  formData  -> objeto con todos los valores {nombre, modelo, precio, ...}
//  onChange  -> funcion del padre que actualiza formData
//  onSubmit  -> funcion del padre que guarda/crea el producto
//  onCancel  -> opcional: si lo pasan, aparece el botón Cancelar
//  esEdicion -> cambia el texto del boton (Crear o Guardar)
//  sinCambios  -> el padre lo pone en true cuando se está editando y no se
//                 modificó ningún dato; bloquea el guardado

const FormularioProducto = ({
  formData,
  onChange,
  onSubmit,
  onCancel,
  esEdicion = false,
  sinCambios = false
  }) => {

  // ¿El usuario ya apretó "Enviar"? Si sí, todos los campos muestran su error.
  const [intentoEnvio, setIntentoEnvio] = useState(false);

  // Error de la categoría: se calcula aquí porque el <select> no usa el
  // átomo InputGroup, así que nadie más lo calcula por él.
  const errorCategoria = validarCategoria(formData.categoriaSlug);

  // Si CUALQUIER validación devuelve texto, hay errores.
  const hayErrores =
    validarNombreProducto(formData.nombre) ||
    validarModelo(formData.modelo) ||
    errorCategoria ||
    validarPrecio(formData.precio) ||
    validarStock(formData.stock) ||
    validarImagen(formData.imagen);

  const handleSubmit = (e) => {
    e.preventDefault();       // evita que la página se recargue
    if (sinCambios) return;   // edición sin modificaciones: no hay nada que guardar    
    setIntentoEnvio(true);    // desde ahora todos muestran sus errores
    if (hayErrores) return;   // si algo está mal, no envía
    onSubmit(e);              // si todo está bien, llama al onSubmit del padre
  };

  return (
    // noValidate desactiva los mensajes nativos del navegador (por los
    // `required`) para que se vean los mensajes propios de validación.
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
      {/* Fila de 2 columnas (grid de Bootstrap): Categoria | Precio */}
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="categoriaSlug" className="form-label fw-bold">
              Categoría <span className="text-danger">*</span>
            </label>

            <select
              id="categoriaSlug"
              name="categoriaSlug"
              className={`form-select ${intentoEnvio && errorCategoria ? "is-invalid" : ""}`}
              value={formData.categoriaSlug}
              onChange={onChange}
              required
            >
              <option value="">Selecciona una categoría</option>
              {/* Genera una <option> por cada categoria del archivo de datos.
                  'key' ayuda a React a identificar cada elemento de la lista*/}

              {categoriasData.map((categoria) => (
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