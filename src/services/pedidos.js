import api from "./api";

export const crearPedido = async (carrito, tipoEnvio) => {
  const items = carrito.map((item) => ({
    productoId: item.id,
    cantidad: item.cantidad
  }));

  const response = await api.post("/pedidos", {
    items,
    tipoEnvio
  });



  return response.data;
};

export const obtenerMisPedidos = async () => {
  const response = await api.get("/pedidos/mios");
  return response.data.pedidos;
};

export const obtenerPedido = async (id) => {
  const response = await api.get(`/pedidos/${id}`);
  return response.data.pedido;
};