import { useCart } from "../../../context/CarritoContext";

const OpcionesEnvio = () => {
  const { tipoEnvio, setTipoEnvio } = useCart();

  return (
    <div className="my-3 p-3 bg-light rounded border">
      <h6 className="fw-bold mb-2 small text-uppercase text-muted">Tipo de Entrega</h6>
      
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="tipoEnvio"
          id="envioRetiro"
          value="retiro"
          checked={tipoEnvio === "retiro"}
          onChange={(e) => setTipoEnvio(e.target.value)}
        />
        <label className="form-check-label d-flex justify-content-between align-items-center w-100" htmlFor="envioRetiro">
          <span>Retiro en Local</span>
          <span className="badge bg-success">Gratis</span>
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="tipoEnvio"
          id="envioDomicilio"
          value="domicilio"
          checked={tipoEnvio === "domicilio"}
          onChange={(e) => setTipoEnvio(e.target.value)}
        />
        <label className="form-check-label d-flex justify-content-between align-items-center w-100" htmlFor="envioDomicilio">
          <span>Envío a Domicilio</span>
          <span className="fw-bold text-dark">$3.500</span>
        </label>
      </div>
    </div>
  );
};

export default OpcionesEnvio;