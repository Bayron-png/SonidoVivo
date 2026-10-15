// src/components/molecules/VentanaConfirmacion.jsx
import React from "react";
import ButtonAction from "../../atoms/botones/ButtonAction";
import BotonCerrar from "../../atoms/botones/BotonCerrar";

const VentanaConfirmacion = ({
  mostrar,
  titulo = "Confirmar Acción",
  mensaje = "¿Estás seguro de que deseas realizar esta acción?",
  nombreItem,
  onCancelar,
  onConfirmar,
  textoConfirmar = "Sí, Eliminar",
  varianteConfirmar = "danger"
}) => {
  if (!mostrar) return null;

  return (
    <>
      {/* Fondo oscuro del modal */}
      <div className="modal-backdrop fade show"></div>

      {/* Estructura del Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Encabezado con Átomo BotonCerrar */}
            <div className={`modal-header bg-${varianteConfirmar} text-white`}>
              <h5 className="modal-title">{titulo}</h5>
              <BotonCerrar onClick={onCancelar} blanco />
            </div>

            {/* Cuerpo de la ventana */}
            <div className="modal-body text-center py-4">
              <p className="mb-1">{mensaje}</p>
              {nombreItem && (
                <strong className={`text-${varianteConfirmar} fs-5 d-block mt-2`}>
                  "{nombreItem}"
                </strong>
              )}
              <small className="text-muted d-block mt-2">
                Esta acción no se puede deshacer.
              </small>
            </div>

            {/* Botones */}
            <div className="modal-footer justify-content-center bg-light">
              <ButtonAction
                variant="secondary"
                onClick={onCancelar}
              >
                Cancelar
              </ButtonAction>

              <ButtonAction
                variant={varianteConfirmar}
                onClick={onConfirmar}
              >
                {textoConfirmar}
              </ButtonAction>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VentanaConfirmacion;