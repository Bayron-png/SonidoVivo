import { useState } from "react";

import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CarritoContext";
import { useProductos } from "../context/ProductoContext";
import { crearPedido } from "../services/pedidos";

export function useConfirmarPedido() {
    const { usuario } = useAuth();

    const {
        carrito,
        tipoEnvio,
        vaciarCarrito
    } = useCart();

    const { cargarProductos } = useProductos();

    const [confirmando, setConfirmando] = useState(false);
    const [errorPedido, setErrorPedido] = useState("");
    const [pedidoCreado, setPedidoCreado] = useState(false);

    const confirmarPedido = async () => {
        if (confirmando) return;

        setErrorPedido("");

        if (!usuario) {
            setErrorPedido("Debes iniciar sesión para comprar.");
            return;
        }

        if (usuario.rol !== "cliente") {
            setErrorPedido("Solo los clientes pueden realizar pedidos.");
            return;
        }

        if (carrito.length === 0) return;

        setConfirmando(true);

        try {
            await crearPedido(carrito, tipoEnvio);

            vaciarCarrito();
            setPedidoCreado(true);

            void cargarProductos();

        } catch (error) {
            setErrorPedido(
                error.response?.data?.error ||
                "No fue posible confirmar el pedido."
            );

            void cargarProductos();

        } finally {
            setConfirmando(false);
        }
    };

    return {
        confirmando,
        errorPedido,
        pedidoCreado,
        onConfirmarPedido: confirmarPedido
    };
}