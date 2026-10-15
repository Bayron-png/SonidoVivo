import { createContext, useContext, useState } from "react";
import productosData from "../data/productosData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosData);
  const [busqueda, setBusqueda] = useState("");

  // Agregar un nuevo producto al catálogo
  const agregarProducto = (nuevoProducto) => {
    const productoConId = {
      ...nuevoProducto,
      id: Date.now().toString(),
      precio: Number(nuevoProducto.precio),
      stock: Number(nuevoProducto.stock),
    };

    setProductos((prev) => [productoConId, ...prev]);
  };

  // Editar un producto existente
  const editarProducto = (id, productoActualizado) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              ...productoActualizado,
              precio: Number(productoActualizado.precio),
              stock: Number(productoActualizado.stock),
            }
          : p
      )
    );
  };

  // Eliminar un producto del catálogo
  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  // Filtrado de productos por nombre o categoría
  const productosFiltrados = productos.filter((p) => {
    const termino = busqueda.toLowerCase();

    const nombreMatches =
      p.nombre?.toLowerCase().includes(termino) ||
      p.name?.toLowerCase().includes(termino);

    const categoriaMatches =
      p.categoria?.toLowerCase().includes(termino) ||
      p.category?.toLowerCase().includes(termino);

    return nombreMatches || categoriaMatches;
  });

  return (
    <ProductContext.Provider
      value={{
        productos: productosFiltrados,
        productosTodos: productos,
        totalProductos: productos.length,
        busqueda,
        setBusqueda,
        agregarProducto,
        editarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductos = () => useContext(ProductContext);

export default ProductProvider;