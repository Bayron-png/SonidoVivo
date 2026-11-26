import { validarLongitudMinimaConEspacios, validarObligatorio } from "./validacionesGenerales";

export const validarPassword = (password) => {

    const errorObligatorio = validarObligatorio(password);
    if (errorObligatorio) return errorObligatorio;

    const errorLongitud = validarLongitudMinimaConEspacios(password, 8);
    if (errorLongitud) return errorLongitud;

    if(!/[A-Z]/.test(password)){
        return "La contraseña debe contener al menos una letra mayúscula.";
    }

    return "";
};