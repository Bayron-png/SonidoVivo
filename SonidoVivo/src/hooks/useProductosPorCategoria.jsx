import { useParams } from "react-router-dom";
import productosData from "../data/productosData";
import categoriasData from "../data/categoriasData";

export const useProductosPorCategoria = () => {
  const { slug } = useParams();

  const categoriaActual = categoriasData.find((cat) => cat.slug === slug);

  const productosFiltrados = productosData.filter(
    (prod) => prod.categoriaSlug?.toLowerCase().trim() === slug?.toLowerCase().trim()
  );

  return {
    tituloCategoria: categoriaActual ? categoriaActual.titulo : "Productos",
    productos: productosFiltrados,
  };
};