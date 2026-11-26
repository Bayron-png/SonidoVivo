import React from "react";

const InsigniaStock = ({ stock }) => {
  const cantidad = Number(stock);

  if (cantidad === 0) {
    return <span className="badge bg-danger">Agotado (0)</span>;
  }

  if (cantidad <= 5) {
    return <span className="badge bg-warning text-dark">Poco Stock ({cantidad})</span>;
  }

  return <span className="badge bg-success">Disponible ({cantidad})</span>;
};

export default InsigniaStock;