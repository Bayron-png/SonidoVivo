import React, { useState } from "react";
import { useProductos } from "../../../context/ProductoContext";
import TablaProductos from "./TablaProductos";
import FormularioProducto from "./FormularioProducto";
import categoriasData from "../../../data/categoriasData";

const estadoInicialFormulario = {
  nombre: "",
  modelo: "",
  categoria: "",
  categoriaSlug: "",
  precio: "",
  stock: "",
  imagen: "",
  descripcion: ""
};

const ListaAdmin = () => {
  const {
    productos = [],
    agregarProducto,
    editarProducto,
    eliminarProducto
  } = useProductos();

  const [modalFormulario, setModalFormulario] = useState(false);
  const [esEdicion, setEsEdicion] = useState(false);
  const [idProductoEdicion, setIdProductoEdicion] = useState(null);
  const [formData, setFormData] = useState(estadoInicialFormulario);

  // Modal de confirmación
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Llevar al usuario hasta el formulario
  const irAlFormulario = () => {
    setTimeout(() => {
      const formulario = document.getElementById("formulario-producto");

      if (formulario) {
        formulario.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);
  };

  // Agregar producto
  const handleNuevoProducto = () => {
    setEsEdicion(false);
    setIdProductoEdicion(null);
    setFormData(estadoInicialFormulario);
    setModalFormulario(true);

    irAlFormulario();
  };

  // Editar producto
  const handleEditar = (producto) => {
    setEsEdicion(true);
    setIdProductoEdicion(producto.id);

    setFormData({
      nombre: producto.nombre || producto.name || "",
      modelo: producto.modelo || "",
      categoria: producto.categoria || producto.category || "",
      categoriaSlug: producto.categoriaSlug || "",
      precio: producto.precio || producto.price || 0,
      stock: producto.stock || 0,
      imagen: producto.imagen || "",
      descripcion: producto.descripcion || ""
    });

    setModalFormulario(true);

    irAlFormulario();
  };

  // Guardar producto
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const categoriaSeleccionada = categoriasData.find(
      (categoria) => categoria.slug === formData.categoriaSlug
    );

    const productoData = {
      ...formData,
      categoria: categoriaSeleccionada?.titulo || "",
      categoriaSlug: formData.categoriaSlug,
      precio: Number(formData.precio),
      stock: Number(formData.stock)
    };

    if (esEdicion) {
      editarProducto(idProductoEdicion, productoData);

      setMensajeConfirmacion(
        `Producto "${productoData.nombre}" modificado correctamente.`
      );
    } else {
      agregarProducto(productoData);

      setMensajeConfirmacion(
        `Producto "${productoData.nombre}" añadido correctamente.`
      );
    }

    setModalFormulario(false);
    setFormData(estadoInicialFormulario);
    setMostrarConfirmacion(true);
  };

  // Eliminar producto
  const handleEliminar = (id) => {
    eliminarProducto(id);
  };

  // Cerrar confirmación
  const cerrarConfirmacion = () => {
    setMostrarConfirmacion(false);
    setMensajeConfirmacion("");
  };

  return (
    <div className="mt-4">

      {/* Tabla de productos */}
      <TablaProductos
        productos={productos}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
        onNuevoProducto={handleNuevoProducto}
      />

      {/* Formulario */}
      <FormularioProducto
        mostrar={modalFormulario}
        onCerrar={() => setModalFormulario(false)}
        formData={formData}
        onChange={handleChangeForm}
        onSubmit={handleSubmitForm}
        esEdicion={esEdicion}
      />

      {/* Modal de confirmación */}
      {mostrarConfirmacion && (
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">
                    Operación exitosa
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={cerrarConfirmacion}
                    aria-label="Cerrar"
                  ></button>
                </div>

                <div className="modal-body text-center">
                  <div className="fs-1 mb-3">
                    ✓
                  </div>

                  <p className="mb-0">
                    {mensajeConfirmacion}
                  </p>
                </div>

                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={cerrarConfirmacion}
                  >
                    Aceptar
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div
            className="modal-backdrop fade show"
            onClick={cerrarConfirmacion}
          ></div>
        </>
      )}

    </div>
  );
};

export default ListaAdmin;