import ButtonAction from "./ButtonAction";

const BotonEnviar = ({ label = "Enviar" }) => (
  <ButtonAction type="submit" variant="outline-primary">
    {label}
  </ButtonAction>
);

export default BotonEnviar;
