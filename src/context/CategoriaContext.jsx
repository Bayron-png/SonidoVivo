
import { createContext, useContext, useState } from "react";
import categoriasData from "../data/categoriasData";

const CategoriasContext = createContext();

export const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasData);

  // Agregar una nueva categoría
  const agregarCategoria = (nuevaCategoria) => {
    const categoriaConId = {
      ...nuevaCategoria,
      id: Date.now().toString(),
    };

    setCategorias((prev) => [categoriaConId, ...prev]);
  };

  // Editar una categoría existente
  const editarCategoria = (id, categoriaActualizada) => {
    setCategorias((prev) =>
      prev.map((categoria) =>
        String(categoria.id) === String(id)
          ? {
              ...categoria,
              ...categoriaActualizada,
              id: categoria.id,
            }
          : categoria,
      ),
    );
  };

  // Eliminar una categoría
  const eliminarCategoria = (id) => {
    setCategorias((prev) =>
      prev.filter(
        (categoria) => String(categoria.id) !== String(id),
      ),
    );
  };

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
        totalCategorias: categorias.length,
        agregarCategoria,
        editarCategoria,
        eliminarCategoria,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};

export const useCategorias = () => useContext(CategoriasContext);

export default CategoriasProvider;
