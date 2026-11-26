import { validarLongitudMinima, validarObligatorio, validarSoloLetras } from "./validacionesGenerales";


export const validarNombre = (nombre) => {

    const errorObligatorio = validarObligatorio(nombre);
    if (errorObligatorio) return errorObligatorio;

    const errorLetras = validarSoloLetras(nombre);
    if(errorLetras) return errorLetras;
    
    const errorLongitud = validarLongitudMinima(nombre, 4);
    if(errorLongitud) return errorLongitud;

    return "";
};