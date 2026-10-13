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



