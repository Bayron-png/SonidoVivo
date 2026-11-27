const BotonProcederPago = ({
  onClick,
  cargando = false
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={cargando}
      className="btn btn-success w-100 mt-3 fw-bold py-2"
    >
      {cargando
        ? "Confirmando pedido..."
        : "Confirmar pedido"}
    </button>
  );
};

export default BotonProcederPago;