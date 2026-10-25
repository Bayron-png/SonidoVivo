import { validarLongitudMinimaConEspacios, validarObligatorio } from "./validacionesGenerales";


export const validarMensaje = (mensaje) => {
  const errorObligatorio = validarObligatorio(mensaje);
  if (errorObligatorio) return errorObligatorio;

  return validarLongitudMinimaConEspacios(mensaje.trim(), 10);
};
