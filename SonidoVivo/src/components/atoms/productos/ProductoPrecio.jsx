const ProductoPrecio = ({ precio }) => {
  return (
    <span className="display-6 fw-bold">
      ${precio.toLocaleString("es-CL")}
    </span>
  );
};

export default ProductoPrecio;