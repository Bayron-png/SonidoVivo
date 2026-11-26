import { validarObligatorio } from "./validacionesGenerales";

export const validarCorreoLogin = (correo) => {

    const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (!formatoValido){
        return "El correo no tiene un formato valido"
    }

    return "";
};