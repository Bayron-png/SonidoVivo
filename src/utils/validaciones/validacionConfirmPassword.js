export const validarConfirmPassword = (confirmPassword, passwordToMatch) => {

    if (!confirmPassword) {
        return "";
    }

    if (confirmPassword !== passwordToMatch){
        return "Las contraseñas no coinciden"
    }

    return "";
};
