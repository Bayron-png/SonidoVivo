import { validarObligatorio } from "./validacionesGenerales";


export const validarTelefono = (telefono) => {

    const errorObligatorio = validarObligatorio(telefono);
    if (errorObligatorio) return errorObligatorio;

    const formatoValido = /^\d+$/.test(telefono);

    if (!formatoValido){
        return "Solo puede contener numeros"
    }
    return "";
};

// 