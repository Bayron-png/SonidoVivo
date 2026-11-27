import { usePedidoDetalle } from "../../../hooks/usePedidoDetalle";

const TarjetaPedido = ({ pedido }) => {
    const {
        detalle,
        mostrando,
        cargando,
        error,
        alternarDetalle
    } = usePedidoDetalle(pedido.id);

    const fecha = new Date(pedido.creado_en).toLocaleString("es-CL");
    const total = Number(pedido.total).toLocaleString("es-CL");

    return (
        <article className="card shadow-sm">
            <div className="card-body">
                <header className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h5 mb-0">
                        Pedido #{pedido.id}
                    </h2>

                    <span className="badge bg-secondary">
                        {pedido.estado}
                    </span>
                </header>

                <p className="mb-2">
                    <strong>Fecha: </strong>
                    <time dateTime={pedido.creado_en}>
                        {fecha}
                    </time>
                </p>

                <p className="mb-2">
                    <strong>Tipo de envío: </strong>
                    {pedido.tipo_envio}
                </p>

                <p className="mb-3">
                    <strong>Total: </strong>
                    ${total}
                </p>

                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={alternarDetalle}
                    aria-expanded={mostrando}
                >
                    {mostrando ? "Ocultar detalle" : "Ver detalle"}
                </button>

                {mostrando && (
                    <section
                        className="border-top mt-3 pt-3"
                        aria-label={`Detalle del pedido ${pedido.id}`}
                    >
                        {cargando && (
                            <p role="status">Cargando detalle...</p>
                        )}

                        {error && (
                            <p className="alert alert-danger" role="alert">
                                {error}
                            </p>
                        )}

                        {detalle && (
                            <>
                                <h3 className="h6 fw-bold mb-3">
                                    Productos comprados
                                </h3>

                                <ul className="list-group">
                                    {detalle.detalles.map((item) => (
                                        <li
                                            key={item.productoId}
                                            className="list-group-item d-flex justify-content-between"
                                        >
                                            <span>
                                                {item.productoId} × {item.cantidad}
                                            </span>

                                            <span>
                                                ${Number(item.subtotal).toLocaleString("es-CL")}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </section>
                )}
            </div>
        </article>
    );
};

export default TarjetaPedido;