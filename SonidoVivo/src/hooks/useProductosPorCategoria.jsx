import { useParams } from "react-router-dom";
import { useProductos } from "../context/ProductoContext";
import categoriasData from "../data/categoriasData";

export const useProductosPorCategoria = () => {
  const { slug } = useParams();
  const { productos } = useProductos();

  const categoriaActual = categoriasData.find(
    (cat) => cat.slug === slug
  );

  const productosFiltrados = productos.filter(
    (prod) =>
      prod.categoriaSlug?.toLowerCase().trim() ===
      slug?.toLowerCase().trim()
  );

  return {
    tituloCategoria: categoriaActual
      ? categoriaActual.titulo
      : "Productos",
    productos: productosFiltrados,
  };
};