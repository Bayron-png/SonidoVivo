import ButtonAction from "../../atoms/botones/ButtonAction";

const EstadoConsulta = ({
  cargando,
  error,
  onReintentar,
  mensajeCarga = "Cargando información..."
}) => {
  if (cargando) {
    return (
      <p role="status" aria-live="polite" className="text-center py-4">
        {mensajeCarga}
      </p>
    );
  }

  if (error) {
    return (
      <section
        className="text-center py-4"
        aria-label="Error al cargar información"
      >
        <p role="alert" className="text-danger mb-3">
          {error}
        </p>

        <ButtonAction
          type="button"
          variant="outline-primary"
          onClick={onReintentar}
        >
          Reintentar
        </ButtonAction>
      </section>
    );
  }

  return null;
};

export default EstadoConsulta;