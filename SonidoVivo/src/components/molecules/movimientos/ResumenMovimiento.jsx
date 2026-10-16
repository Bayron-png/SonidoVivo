import MovimientoTotal from "../../atoms/movimientos/MovimientoTotal";

const ResumenMovimiento = ({
  subtotal,
  costoEnvio,
  total,
}) => {
  return (
    <div className="text-end">
      <p className="mb-1">
        Subtotal: ${subtotal.toLocaleString("es-CL")}
      </p>

      <p className="mb-1">
        Envío: ${costoEnvio.toLocaleString("es-CL")}
      </p>

      <MovimientoTotal total={total} />
    </div>
  );
};

export default ResumenMovimiento;