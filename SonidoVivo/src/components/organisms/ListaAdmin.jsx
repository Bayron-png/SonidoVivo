import React, { useState } from "react";
import { useProductos } from "../../context/ProductoContext";
import TablaProductos from "./TablaProductos";
import FormularioProducto from "../organisms/FormularioProducto";

const estadoInicialFormulario = {
  nombre: "",
  modelo: "",
  categoria: "",
  precio: "",
  stock: "",
  imagen: "",
  descripcion: "",
};

const ListaAdmin = () => {
  const {
    productos = [],
    agregarProducto,
    editarProducto,
    eliminarProducto,
  } = useProductos();

  const [modalFormulario, setModalFormulario] = useState(false);
  const [esEdicion, setEsEdicion] = useState(false);
  const [idProductoEdicion, setIdProductoEdicion] = useState(null);
  const [formData, setFormData] = useState(estadoInicialFormulario);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNuevoProducto = () => {
    setEsEdicion(false);
    setIdProductoEdicion(null);
    setFormData(estadoInicialFormulario);
    setModalFormulario(true);
  };

  const handleEditar = (producto) => {
    setEsEdicion(true);
    setIdProductoEdicion(producto.id);
    setFormData({
      nombre: producto.nombre || producto.name || "",
      modelo: producto.modelo || "",
      categoria: producto.categoria || producto.category || "",
      precio: producto.precio || producto.price || 0,
      stock: producto.stock || 0,
      imagen: producto.imagen || "",
      descripcion: producto.descripcion || "",
    });
    setModalFormulario(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const productoData = {
      ...formData,
      precio: Number(formData.precio),
      stock: Number(formData.stock),
    };

    if (esEdicion) {
      editarProducto(idProductoEdicion, productoData);
    } else {
      agregarProducto(productoData);
    }

    setModalFormulario(false);
    setFormData(estadoInicialFormulario);
  };

  const handleEliminar = (id) => {
    eliminarProducto(id);
  };

  return (
    <div className="mt-4">
      <TablaProductos
        productos={productos}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
        onNuevoProducto={handleNuevoProducto}
      />

      <FormularioProducto
        mostrar={modalFormulario}
        onCerrar={() => setModalFormulario(false)}
        formData={formData}
        onChange={handleChangeForm}
        onSubmit={handleSubmitForm}
        esEdicion={esEdicion}
      />
    </div>
  );
};

export default ListaAdmin;
