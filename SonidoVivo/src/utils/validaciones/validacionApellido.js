import { validarLongitudMinima, validarObligatorio, validarSoloLetras } from "./validacionesGenerales";

export const validarApellido = (apellido) => {

    const errorObligatorio = validarObligatorio(apellido);
    if (errorObligatorio) return errorObligatorio;

    const errorLongitud = validarLongitudMinima(apellido, 4);
    if (errorLongitud) return errorLongitud;

    if (!apellido || !apellido.trim()){
        return"";
    }

    const errorLetras = validarSoloLetras(apellido);
    if (errorLetras) return errorLetras;

    return "";
};