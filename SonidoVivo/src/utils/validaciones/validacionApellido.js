import { validarSoloLetras } from "./validacionesGenerales";

export const validarApellido = (apellido) => {

    if (!apellido || !apellido.trim()){
        return"";
    }

    const errorLetras = validarSoloLetras(apellido);
    if (errorLetras) return errorLetras;

    return "";
};