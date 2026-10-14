import { useCart } from "../../../context/CarritoContext";

const TotalCarrito = () => {
  const { subtotal, costoEnvio, total, tipoEnvio } = useCart();

  return (
    <div className="border-top pt-3 mt-3">
      <div className="d-flex justify-content-between align-items-center mb-1 text-muted small">
        <span>Subtotal:</span>
        <span>${subtotal.toLocaleString("es-CL")}</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2 text-muted small">
        <span>Envío:</span>
        <span>
          {tipoEnvio === "domicilio" 
            ? `$${costoEnvio.toLocaleString("es-CL")}` 
            : "Gratis"}
        </span>
      </div>

      <div className="d-flex justify-content-between align-items-center fw-bold fs-5 pt-2 border-top">
        <span>Total:</span>
        <span className="text-primary">${total.toLocaleString("es-CL")}</span>
      </div>
    </div>
  );
};

export default TotalCarrito;