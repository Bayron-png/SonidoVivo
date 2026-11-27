import MisPedidosTemplate from "../../components/templates/MisPedidosTemplate";
import { useMisPedidos } from "../../hooks/useMisPedidos";

function MisPedidos() {
    const consulta = useMisPedidos();

    return <MisPedidosTemplate {...consulta} />;
}

export default MisPedidos;