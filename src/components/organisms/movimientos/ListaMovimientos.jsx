import TarjetaMovimiento from "./TarjetaMovimiento";

const ListaMovimientos = ({ movimientos }) => {
  return (
    <div className="row g-4">
      {movimientos.map((movimiento) => (
        <div className="col-12" key={movimiento.id}>
          <TarjetaMovimiento movimiento={movimiento} />
        </div>
      ))}
    </div>
  );
};

export default ListaMovimientos;