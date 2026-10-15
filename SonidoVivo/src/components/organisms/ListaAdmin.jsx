import React, { useState } from "react";
import { useProductos } from "../../context/ProductoContext";
import TablaProductos from "./TablaProductos";
import FormularioProducto from "../organisms/FormularioProducto";
import categoriasData from "../../data/categoriasData";

const estadoInicialFormulario = {
  nombre: "",
  modelo: "",
  categoria: "",
  categoriaSlug: "",
  precio: "",
  stock: "",
  imagen: "",
  descripcion: "",
};

const irAlFormulario = () => {
  const formulario = document.getElementById("formulario-producto");

  if (formulario) {
    formulario.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNuevoProducto = () => {
    setEsEdicion(false);
    setIdProductoEdicion(null);
    setFormData(estadoInicialFormulario);

    setTimeout(() => {
      irAlFormulario();
    }, 0);
  };

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
      descripcion: producto.descripcion || "",
    });

    setTimeout(() => {
      irAlFormulario();
    }, 0);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const categoriaSeleccionada = categoriasData.find(
      (categoria) => categoria.slug === formData.categoriaSlug,
    );

    const productoData = {
      ...formData,

      categoria: categoriaSeleccionada?.titulo || "",
      categoriaSlug: formData.categoriaSlug,

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
