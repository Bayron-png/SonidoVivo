import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const cargarProductos = async () => {
    setCargando(true);
    setError("");

    try {
      const { data } = await api.get("/catalogo");

      if (!Array.isArray(data)) {
        throw new Error("La API no devolvió una lista de productos");
      }

      const productosNormalizados = data.map((producto) => ({
        ...producto,
        categoriaSlug: producto.categoria_slug,
      }));

      setProductos(productosNormalizados);
    } catch (error) {
      setError(
        error.response?.data?.error ||
        error.message ||
        "No se pudo cargar el catálogo"
      );
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);


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
          : p,
      ),
    );
  };

  // Eliminar un producto del catálogo
  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  // Eliminar un producto del catálogo
  const ajustarStock = (id, cambio) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
            ...p,
            stock: Math.max(0, Number(p.stock) + cambio),
          }
          : p,
      ),
    );
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
        ajustarStock,
        cargando,
        error,
        cargarProductos,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductos = () => useContext(ProductContext);
export default ProductProvider;
