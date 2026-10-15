import { Link } from "react-router-dom";

import ProductoImagen from "../atoms/productos/ProductoImagen";
import ProductoInformacion from "../molecules/ProductoInformacion";
import ProductoPrecioStock from "../molecules/ProductoPrecioStock";
import BotonAgregarAlCarrito from "../atoms/botones/BotonAgregarAlCarrito";

const DetalleProductoContenido = ({ producto, categoria }) => {
  const disponible = producto.stock > 0;

  return (
    <main className="flex-grow-1 container py-5">

      <div className="mb-4">
        <Link
          to={`/catalogo/${producto.categoriaSlug}`}
          className="btn btn-primary"
        >
          ← Volver a{" "}
          {categoria?.titulo || producto.categoria}
        </Link>
      </div>

      <div className="card shadow-sm border-0 overflow-hidden">
        <div className="row g-0">

          {/* Imagen */}
          <div className="col-12 col-md-6 bg-light d-flex align-items-center justify-content-center p-4 p-md-5">
            <ProductoImagen
              imagen={producto.imagen}
              nombre={producto.nombre}
            />
          </div>

          {/* Información */}
          <div className="col-12 col-md-6">
            <div className="card-body p-4 p-md-5">

              <ProductoInformacion
                producto={producto}
              />

              <hr />

              <ProductoPrecioStock
                producto={producto}
              />

              <BotonAgregarAlCarrito
                productoId={producto.id}
                disponible={disponible}
              />

            </div>
          </div>

        </div>
      </div>

    </main>
  );
};

export default DetalleProductoContenido;