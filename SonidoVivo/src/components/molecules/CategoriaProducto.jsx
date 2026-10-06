import ImagenCategoria from "../atoms/catalogo/ImagenCategoria";
import TituloCategoria from "../atoms/catalogo/TituloCategoria";

const CategoriaProducto = ({ src, titulo }) => {
  return (
    <div className="card h-100 shadow-sm">
      <ImagenCategoria src={src} alt={titulo} />
      <div className="card-body text-center">
        <TituloCategoria texto = {titulo}/>
      </div>
    </div>
  );
};

export default CategoriaProducto;
