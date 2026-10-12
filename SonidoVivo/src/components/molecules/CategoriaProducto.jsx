import { Link } from "react-router-dom";
import ImagenCategoria from "../atoms/catalogo/ImagenCategoria";
import TituloCategoria from "../atoms/catalogo/TituloCategoria";

const CategoriaProducto = ({ src, titulo, slug }) => {
  return (
    <Link to={`/catalogo/${slug}`} className="text-decoration-none">
      <div className="card h-100 shadow-sm border-0">
        <ImagenCategoria src={src} alt={titulo} />
        <div className="card-body text-center">
          <TituloCategoria texto={titulo} />
        </div>
      </div>
    </Link>
  );
};

export default CategoriaProducto;