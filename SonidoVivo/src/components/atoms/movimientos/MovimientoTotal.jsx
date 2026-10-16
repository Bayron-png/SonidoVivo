const MovimientoTotal = ({ total }) => {
  return (
    <h5>
      Total: ${total.toLocaleString("es-CL")}
    </h5>
  );
};

export default MovimientoTotal;