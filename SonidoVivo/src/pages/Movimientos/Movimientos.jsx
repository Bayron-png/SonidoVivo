import { useMovimientos } from "../../context/MovimientosContext";
import MovimientosTemplate from "../../components/templates/MovimientosTemplate";

const Movimientos = () => {
  const { movimientos } = useMovimientos();

  return (
    <MovimientosTemplate
      movimientos={movimientos}
    />
  );
};

export default Movimientos;