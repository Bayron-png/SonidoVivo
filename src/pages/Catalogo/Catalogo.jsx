import CatalogoTemplate from "../../components/templates/CatalogoTemplate";
import { useProductos } from "../../context/ProductoContext";

function Catalogo() {
  const { productosTodos } = useProductos();

  return (
    <CatalogoTemplate productos={productosTodos} />
  );
}

export default Catalogo;
