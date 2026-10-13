const TotalCarrito = ({ total }) => (
  <div className="d-flex justify-content-between align-items-center fw-bold fs-5 my-3">
    <span>Total:</span>
    <span>${total.toLocaleString("es-CL")}</span>
  </div>
);

export default TotalCarrito;