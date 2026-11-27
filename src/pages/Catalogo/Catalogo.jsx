import CatalogoTemplate from "../../components/templates/CatalogoTemplate";
import { useProductos } from "../../context/ProductoContext";

function Catalogo() {
  const {
    productosTodos,
    cargando,
    error,
    cargarProductos
  } = useProductos();

  return (
    <CatalogoTemplate
      productos={productosTodos}
      cargando={cargando}
      error={error}
      onReintentar={cargarProductos}
    />
  );
}

export default Catalogo;