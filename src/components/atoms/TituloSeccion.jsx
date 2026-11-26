const TituloSeccion = ({texto}) => {
  return (
    <div>
      <h2 id="titulo-seccion" className="fw-bold">
        {texto}
      </h2>
    </div>
  );
};

export default TituloSeccion;
