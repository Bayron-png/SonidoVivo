import { useState } from "react";
import { obtenerPedido } from "../services/pedidos";

export function usePedidoDetalle(id) {
    const [detalle, setDetalle] = useState(null);
    const [mostrando, setMostrando] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    const alternarDetalle = async () => {
        if (mostrando) {
            setMostrando(false);
            return;
        }

        setMostrando(true);

        if (detalle) return;

        setCargando(true);
        setError("");

        try {
            const resultado = await obtenerPedido(id);
            setDetalle(resultado);
        } catch (error) {
            setError(
                error.response?.data?.error ||
                "No se pudo cargar el detalle del pedido."
            );
        } finally {
            setCargando(false);
        }
    };

    return {
        detalle,
        mostrando,
        cargando,
        error,
        alternarDetalle
    };
}