import { useCart } from "../../../context/CarritoContext";
import { useMovimientos } from "../../../context/MovimientosContext";

const BotonProcederPago = ({ onPagoCompletado }) => {
  const {
    carrito,
    subtotal,
    costoEnvio,
    total,
    tipoEnvio,
    vaciarCarrito,
  } = useCart();

  const { agregarMovimiento } = useMovimientos();

  const handlePago = () => {
    // 1. Registrar el pedido antes de vaciar el carrito
    agregarMovimiento({
      productos: carrito,
      subtotal,
      costoEnvio,
      total,
      tipoEnvio,
    });

    // 2. Vaciar el carrito
    vaciarCarrito();

    // 3. Mostrar mensaje de pedido completado
    if (onPagoCompletado) {
      onPagoCompletado();
    }

    // 4. Volver al comienzo de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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