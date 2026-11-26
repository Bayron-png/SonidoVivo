import { validarObligatorio } from "./validacionesGenerales";


export const validarCorreo = (correo) => {

    const errorObligatorio = validarObligatorio(correo);
    if (errorObligatorio) return errorObligatorio;

    const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (!formatoValido){
        return "Ingresa un correo valido"
    }

    return "";
};

