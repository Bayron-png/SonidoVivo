import { validarFormatoImagen, validarLongitudMinimaConEspacios, validarObligatorio, validarSoloLetrasYNumeros } from "./validacionesGenerales";

// Cada función recibe el valor del campo y devuelve:
//   ""     -> está bien
//   "texto" -> el mensaje de error


export const validarNombreCategoria = (nombre) => {
    const errorObligatorio = validarObligatorio(nombre);
    if (errorObligatorio) return errorObligatorio;

    const errorSoloLetrasYNumeros = validarSoloLetrasYNumeros(nombre);
    if (errorSoloLetrasYNumeros) return errorSoloLetrasYNumeros;

    const errorLongitudMin = validarLongitudMinimaConEspacios(nombre);
    if (errorLongitudMin) return errorLongitudMin;

    return "";
};

export const validarFormatoSlug = (slug) => {

    const errorObligatorio = validarObligatorio(slug);
    if (errorObligatorio) return errorObligatorio;

    // Slug: minúsculas, números y guiones simples entre palabras.
    // Ej: "guitarras-acusticas" (sin espacios, tildes, mayúsculas ni guiones
    // al inicio, al final o repetidos)
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
        return "Solo minúsculas, números y guiones entre palabras (ej. guitarras-acusticas)";
    }
    return "";
};

export const validarUrlImagenCategoria = (url) => {

    const errorObligatorio = validarObligatorio(url);
    if (errorObligatorio) return errorObligatorio;

    const errorFormatoImagen = validarFormatoImagen(url);
    if (errorFormatoImagen) return errorFormatoImagen;

    return "";
}

