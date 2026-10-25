// Evita que un campo obligatorio no este en blanco o se rellene con espacios
export const validarObligatorio = (valor) => {
    if (valor == null || !String(valor).trim()) {
        return "Este campo es obligatorio";
    } return "";
};

// Solo permite letras y espacios 
export const validarSoloLetras = (valor) => {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(valor)) {
        return "Solo puede contener letras y espacios";
    }
    return "";
}

// Cuenta letras sin tomar en cuenta los espacios
export const validarLongitudMinima = (valor, minimo) => {
    if (valor.replace(/\s/g, '').length < minimo) {
        return `Debe tener al menos ${minimo} letras`;
    }
    return "";
};

// Cuenta los caracteres incluyendo espacios
export const validarLongitudMinimaConEspacios = (valor, minimo) => {
    if (valor.length < minimo) {
        return `Debe tener al menos ${minimo} caracteres`;
    }
    return "";
};

// Solo permite letras, números y espacios (sin símbolos)
export const validarSoloLetrasYNumeros = (valor) => {
    if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(valor)) {
        return "Solo puede contener letras, números y espacios";
    }
    return "";
};

// Acepta una ruta relativa (carpeta/imagen.png) o una URL https,
// y en ambos casos el archivo debe terminar en un formato de imagen.
export const validarFormatoImagen = (valor) => {
    const extension = "(png|jpg)";
 
    const esRutaRelativa = new RegExp(`^([\\w-]+/)*[\\w.-]+\\.${extension}$`, "i").test(valor);
    const esUrlHttps = new RegExp(`^https://\\S+\\.${extension}$`, "i").test(valor);
 
    if (!esRutaRelativa && !esUrlHttps) {
        return "Ingresa una ruta (carpeta/imagen.png) o una URL https que termine en .png o.jpg";
    }
    return "";
};
