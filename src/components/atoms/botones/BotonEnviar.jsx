import ButtonAction from "./ButtonAction";

const BotonEnviar = ({ label = "Enviar", disabled = false }) => (
  <ButtonAction type="submit" variant="outline-primary" disabled={disabled}>
    {label}
  </ButtonAction>
);

export default BotonEnviar;
