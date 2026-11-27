import CarritoTemplate from "../../components/templates/CarritoTemplate";
import { useConfirmarPedido } from "../../hooks/useConfirmarPedido";

function Carrito() {
  const estadoPedido = useConfirmarPedido();

  return <CarritoTemplate {...estadoPedido} />;
}

export default Carrito;