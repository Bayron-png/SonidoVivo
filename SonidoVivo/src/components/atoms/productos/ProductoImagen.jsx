const ProductoImagen = ({ imagen, nombre }) => {
  if (!imagen) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100">
        <p className="text-muted mb-0">
          Imagen no disponible
        </p>
      </div>
    );
  }

  return (
    <img
      src={imagen}
      alt={nombre}
      className="img-fluid object-fit-contain"
    />
  );
};

export default ProductoImagen;