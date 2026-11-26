import { useCart } from "../../../context/CarritoContext";

const BotonAgregarAlCarrito = ({ productoId, disponible }) => {
  const { agregarAlCarrito } = useCart();

  return (
    <button
      type="button"
      className="btn btn-primary btn-sm w-100"
      disabled={!disponible}
      onClick={() => agregarAlCarrito(productoId)}
    >
      {disponible ? "Agregar al carrito" : "Agotado"}
    </button>
  );
};

export default BotonAgregarAlCarrito;