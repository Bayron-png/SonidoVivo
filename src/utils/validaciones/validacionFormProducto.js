
import {
  validarObligatorio,
  validarLongitudMinima,
} from "./validacionesGenerales";

// Cada función recibe el valor del campo y devuelve:
//   ""     -> está bien
//   "texto" -> el mensaje de error

export const validarNombreProducto = (nombre) => {
  const errorObligatorio = validarObligatorio(nombre);
  if (errorObligatorio) return errorObligatorio;

  const errorLongitud = validarLongitudMinima(nombre, 3);
  if (errorLongitud) return errorLongitud;

  return "";
};

export const validarModelo = (modelo) => {
  const errorObligatorio = validarObligatorio(modelo);
  if (errorObligatorio) return errorObligatorio;

  return "";
};

export const validarCategoria = (categoriaSlug) => {
  if (!categoriaSlug) return "Selecciona una categoría";
  return "";
};

// String(...) porque el valor puede llegar como número (al editar un producto)
// o como texto (al escribir en el input).
export const validarPrecio = (precio) => {
  const texto = String(precio ?? "").trim();
  if (texto === "") return "El precio es obligatorio";
  if (Number(texto) < 0) return "El precio no puede ser negativo";
  return "";
};

export const validarStock = (stock) => {
  const texto = String(stock ?? "").trim();
  if (texto === "") return "El stock es obligatorio";
  if (!Number.isInteger(Number(texto)) || Number(texto) < 0)
    return "Debe ser un número entero, 0 o mayor";
  return "";
};

export const validarImagen = (url) => {
  const valor = String(url ?? "").trim();
  if (!valor) return ""; // es opcional

  const esUrlCompleta = /^https?:\/\/\S+$/i.test(valor);
  const esRutaLocal = /^(\/|\.\/|\.\.\/)\S+$/.test(valor);

  if (!esUrlCompleta && !esRutaLocal) {
    return "Ingresa una ruta válida (/...)";
  }
  return "";
};