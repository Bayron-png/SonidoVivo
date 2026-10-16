const MovimientoTipoEnvio = ({ tipoEnvio }) => {
  return (
    <div className="mt-3">
      <strong>Tipo de envío:</strong>{" "}
      {tipoEnvio === "domicilio"
        ? "Despacho a domicilio"
        : "Retiro en tienda"}
    </div>
  );
};

export default MovimientoTipoEnvio;