import { useCart } from "../../../context/CarritoContext";

const BotonProcederPago = ({ onPagoCompletado }) => {
  const { vaciarCarrito } = useCart();

  const handlePago = () => {
    // 1. Limpiar carrito
    vaciarCarrito();
    // 2. Notificamos al componente padre que la compra se completó
    if (onPagoCompletado) {
      onPagoCompletado();
    }
  };

  return (
    <div>
      <button 
        type="button"
        onClick={handlePago}
        className="btn btn-success w-100 mt-3 fw-bold py-2">
        Proceder al pago
      </button>
    </div>
  );
};

export default BotonProcederPago;