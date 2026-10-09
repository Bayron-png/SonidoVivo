import { Link } from "react-router-dom";
import ImagenCategoria from "../atoms/catalogo/ImagenCategoria";
import TituloCategoria from "../atoms/catalogo/TituloCategoria";

const CategoriaProducto = ({ src, titulo, slug }) => {
  return (
    <Link
      to={`/catalogo/${slug}`}
      className="text-decoration-none text-reset d-block h-100"
    >
      <div className="card h-100 shadow-sm tarjeta-categoria">
        <ImagenCategoria src={src} alt={titulo} />
        <div className="card-body text-center">
          <TituloCategoria texto={titulo} />
        </div>
      </div>
    </Link>
  );
};

export default CategoriaProducto;