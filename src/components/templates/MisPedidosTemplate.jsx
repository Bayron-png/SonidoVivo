import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import BotonVolver from "../atoms/botones/BotonVolver";
import TituloRedondeado from "../atoms/TituloRedondeado";

import ListaPedidos from "../organisms/pedidos/ListaPedidos";
import EstadoConsulta from "../molecules/estados/EstadoConsulta";

const MisPedidosTemplate = ({
    pedidos,
    cargando,
    error,
    cargarPedidos
}) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="container flex-grow-1 pt-5 mb-4">
                <BotonVolver
                    label="← Volver al catálogo"
                    ruta="/catalogo"
                />

                <TituloRedondeado texto="Mis pedidos" />

                <EstadoConsulta
                    cargando={cargando}
                    error={error}
                    onReintentar={cargarPedidos}
                    mensajeCarga="Cargando tus pedidos..."
                />

                {!cargando && !error && (
                    <ListaPedidos pedidos={pedidos} />
                )}
            </main>

            <Footer />
        </div>
    );
};

export default MisPedidosTemplate;