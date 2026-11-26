import BotonVolver from "../botones/BotonVolver";

const MensajePedidoExitoso = ({ onVolver }) => {
  return (
    <div className="text-center py-5 bg-white rounded border shadow-sm my-4">
      <div className="mb-3 text-success fs-1">🎉</div>
      <h3 className="fw-bold text-dark mb-2">¡Pedido Realizado con Éxito!</h3>
      <p className="text-muted mb-4">
        Gracias por tu compra en SonidoVivo. Hemos recibido tu pedido correctamente.
      </p>
      <BotonVolver label = "Volver" ruta = "/">
      </BotonVolver>
    </div>
  );
};

export default MensajePedidoExitoso;