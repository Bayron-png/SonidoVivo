const MensajeSinProductos = ({ mensaje = "No hay productos disponibles." }) => {
  return (
    <div className="col-12 text-center py-5">
      <p className="text-muted fs-5 m-0">{mensaje}</p>
    </div>
  );
};

export default MensajeSinProductos;