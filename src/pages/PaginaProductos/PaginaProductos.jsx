import ProductosTemplate from "../../components/templates/ProductosTemplate";
import { useProductosPorCategoria } from "../../hooks/useProductosPorCategoria";

const PaginaProductos = () => {
  const { tituloCategoria, productos } = useProductosPorCategoria();

  return (
    <ProductosTemplate
      titulo={tituloCategoria}
      productos={productos}
      rutaVolver="/catalogo"
    />
  );
};

export default PaginaProductos;