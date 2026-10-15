const ProductoStock = ({ stock }) => {
  const disponible = stock > 0;

  return (
    <span
      className={`badge fs-6 ${
        disponible ? "text-bg-success" : "text-bg-danger"
      }`}
    >
      {disponible ? `Stock: ${stock}` : "Sin stock"}
    </span>
  );
};

export default ProductoStock;