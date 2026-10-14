import { validarObligatorio } from "./validacionesGenerales";

export const validarRut = (rut) => {
    const errorObligatorio = validarObligatorio(rut);
    if (errorObligatorio) return errorObligatorio;

    const formatoValido = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/.test(rut);
    
    if (!formatoValido){
        return "Ingresa un rut valido"
    }

    return "";
};