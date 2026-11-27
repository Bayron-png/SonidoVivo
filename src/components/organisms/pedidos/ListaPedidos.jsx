import TarjetaPedido from "../../molecules/pedidos/TarjetaPedido";

const ListaPedidos = ({ pedidos = [] }) => {
    if (pedidos.length === 0) {
        return (
            <p className="alert alert-info" role="status">
                Todavía no has realizado pedidos.
            </p>
        );
    }

    return (
        <section aria-label="Historial de pedidos">
            <ul className="list-unstyled d-grid gap-3">
                {pedidos.map((pedido) => (
                    <li key={pedido.id}>
                        <TarjetaPedido pedido={pedido} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ListaPedidos;