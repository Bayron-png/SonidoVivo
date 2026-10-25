
import { useState } from "react";
import { useCategorias } from "../../context/CategoriaContext";

const formularioInicial = {
  titulo: "",
  slug: "",
  src: "",
};

const generarSlug = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const useGestionCategorias = () => {
  const {
    categorias,
    totalCategorias,
    agregarCategoria,
    editarCategoria,
    eliminarCategoria,
  } = useCategorias();

  const [formulario, setFormulario] = useState(formularioInicial);
  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaPorEliminar, setCategoriaPorEliminar] = useState(null);

  const categoriasFiltradas = categorias.filter((categoria) =>
    `${categoria.titulo} ${categoria.slug}`
      .toLowerCase()
      .includes(busqueda.toLowerCase().trim()),
  );

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "titulo" && categoriaEditando === null
        ? { slug: generarSlug(value) }
        : {}),
    }));
  };

  const limpiarFormulario = () => {
    setFormulario({ ...formularioInicial });
    setCategoriaEditando(null);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const titulo = formulario.titulo.trim();
    const slug = formulario.slug.trim();
    const src = formulario.src.trim();

    if (!titulo || !slug || !src) {
      window.alert("Completa todos los campos.");
      return;
    }

    const duplicada = categorias.some(
      (categoria) =>
        String(categoria.id) !== String(categoriaEditando) &&
        (categoria.slug.toLowerCase() === slug.toLowerCase() ||
          categoria.titulo.toLowerCase() === titulo.toLowerCase()),
    );

    if (duplicada) {
      window.alert("Ya existe una categoría con ese nombre o slug.");
      return;
    }

    if (categoriaEditando !== null) {
      editarCategoria(categoriaEditando, { titulo, slug, src });
    } else {
      agregarCategoria({ titulo, slug, src });
    }

    limpiarFormulario();
  };

  const prepararEdicion = (categoria) => {
    setCategoriaEditando(categoria.id);
    setFormulario({
      titulo: categoria.titulo,
      slug: categoria.slug,
      src: categoria.src,
    });
  };

  const solicitarEliminacion = (categoria) => {
    setCategoriaPorEliminar(categoria);
  };

  const cancelarEliminacion = () => {
    setCategoriaPorEliminar(null);
  };

  const confirmarEliminacion = () => {
    if (!categoriaPorEliminar) return;

    const id = categoriaPorEliminar.id;

    eliminarCategoria(id);

    if (String(categoriaEditando) === String(id)) {
      limpiarFormulario();
    }

    setCategoriaPorEliminar(null);
  };

  return {
    categorias,
    totalCategorias,
    categoriasFiltradas,
    formulario,
    categoriaEditando,
    busqueda,
    categoriaPorEliminar,
    manejarCambio,
    manejarEnvio,
    limpiarFormulario,
    prepararEdicion,
    setBusqueda,
    solicitarEliminacion,
    cancelarEliminacion,
    confirmarEliminacion,
  };
};

export default useGestionCategorias;
