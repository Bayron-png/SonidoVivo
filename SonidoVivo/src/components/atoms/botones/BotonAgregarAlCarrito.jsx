const BotonAgregarAlCarrito = ({ disponible }) => (
  <button
    type="button"
    className="btn btn-primary btn-sm w-100"
    disabled={!disponible}
  >
    Agregar al carrito
  </button>
);

export default BotonAgregarAlCarrito;
