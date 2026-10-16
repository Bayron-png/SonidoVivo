const MovimientoProducto = ({ producto }) => {
  const subtotalProducto =
    producto.precio * producto.cantidad;

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>
        {producto.nombre} x {producto.cantidad}
      </span>

      <span>
        ${subtotalProducto.toLocaleString("es-CL")}
      </span>
    </li>
  );
};

export default MovimientoProducto;