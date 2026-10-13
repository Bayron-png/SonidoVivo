// src/components/atoms/botones/BotonProcederPago.jsx
import { useCart } from "../../../context/CarritoContext";

const BotonProcederPago = ({ onPagoCompletado }) => {
  const { vaciarCarrito } = useCart();

  const handlePago = () => {
    // 1. Limpiar el carrito
    vaciarCarrito();

    // 2. Notificar que la compra se completó
    if (onPagoCompletado) {
      onPagoCompletado();
    }

    // 3. Scroll hacia la parte superior de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 'smooth' para un desplazamiento fluido
    });
  };

  return (
    <div>
      <button 
        type="button"
        onClick={handlePago}
        className="btn btn-success w-100 mt-3 fw-bold py-2"
      >
        Proceder al pago
      </button>
    </div>
  );
};

export default BotonProcederPago;