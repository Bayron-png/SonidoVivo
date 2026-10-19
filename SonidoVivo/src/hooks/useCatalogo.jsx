import { useState, useMemo } from "react";

const normalizarTexto = (valor) =>
  String(valor ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");

export const useCatalogo = (productos = []) => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("todos");

  const productosFiltrados = useMemo(() => {
    const termino = normalizarTexto(busqueda.trim());

    return productos.filter((producto) => {
      const coincideBusqueda =
        !termino ||
        [
          producto.id,
          producto.nombre,
          producto.categoria,
          producto.categoriaSlug,
          producto.marca,
          producto.modelo,
          producto.descripcion
        ].some((campo) => normalizarTexto(campo).includes(termino));

      const coincideCategoria =
        !categoriaSeleccionada ||
        producto.categoriaSlug === categoriaSeleccionada;

      const coincideDisponibilidad =
        disponibilidad === "todos" ||
        (disponibilidad === "disponibles" && Number(producto.stock) > 0) ||
        (disponibilidad === "agotados" && Number(producto.stock) <= 0);

      return coincideBusqueda && coincideCategoria && coincideDisponibilidad;
    });
  }, [productos, busqueda, categoriaSeleccionada, disponibilidad]);

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoriaSeleccionada("");
    setDisponibilidad("todos");
  };

  return {
    busqueda,
    setBusqueda,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    disponibilidad,
    setDisponibilidad,
    productosFiltrados,
    limpiarFiltros
  };
};