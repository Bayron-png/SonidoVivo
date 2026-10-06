import CategoriaProducto from "../molecules/CategoriaProducto";
import categoriasData from "../../data/categoriasData";

const CategoriasCatalogo = ({ categorias = categoriasData }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {categorias.map((cat) => (
        <div className="col" key={cat.id}>
          <CategoriaProducto 
            src={cat.src} 
            titulo={cat.titulo} 
          />
        </div>
      ))}
    </div>
  );
};

export default CategoriasCatalogo;