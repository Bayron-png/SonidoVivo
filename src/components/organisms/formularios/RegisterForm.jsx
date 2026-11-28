import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CamposRegister from "../../molecules/formularios/CamposRegister";
import TituloRedondeado from "../../atoms/TituloRedondeado";
import { useNavigate } from "react-router-dom";
import { validarNombre } from "../../../utils/validaciones/validacionNombre";
import { validarApellido } from "../../../utils/validaciones/validacionApellido";
import { validarCorreo } from "../../../utils/validaciones/validacionCorreo";
import { validarPassword } from "../../../utils/validaciones/validacionPassword";
import { validarConfirmPassword } from "../../../utils/validaciones/validacionConfirmPassword";

const RegisterForm = ({ onSubmit }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [errorRegistro, setErrorRegistro] = useState("");

    const navigate = useNavigate();

    const formularioEnviado = async (e) => {
        e.preventDefault();
        if (enviando) return;

        console.log("1. Se envió el formulario");
        const errores = [
            validarNombre(nombre),
            validarApellido(apellido),
            validarCorreo(gmail),
            validarPassword(password),
            validarConfirmPassword(confirmPassword, password)
        ]; 
        console.log("2. Errores encontrados:", errores);
        if (errores.some((error) => error !== "")) {
            console.log("3. Hay errores. No se redirige.");
            return;
        }
            console.log("3. Todos los campos son válidos");

        setEnviando(true);
        setErrorRegistro("");

        try {
            await onSubmit({
                nombre,
                apellido,
                gmail,
                password,
                confirmPassword
            });
            console.log("4. Ejecutando redirección");
            navigate("/");
        } catch (error) {
            setErrorRegistro(
                error.response?.data?.error ||
                "No se pudo completar el registro. Intenta nuevamente."
            );
        } finally {
            setEnviando(false);
        }
    };

    

    return (
        <div className="contenedor-loginform">
            {/* Contenido principal del registro */}
            <Container className="tarjeta-login">
                {/* Título azul redondeado */}
                <div className="titulo-login">
                    <TituloRedondeado texto="Crea tu cuenta" />
                </div>

                {/* Formulario adaptativo con Bootstrap Grid */}
                <Row className="w-100 justify-content-center">
                    <Col xs={12} sm={10} md={10} lg={9}>
                        <Form onSubmit={formularioEnviado}>
                            <CamposRegister
                                nombre={nombre}
                                apellido={apellido}
                                gmail={gmail}
                                password={password}
                                confirmPassword={confirmPassword}
                                onNombreChange={(e) => setNombre(e.target.value)}
                                onApellidoChange={(e) => setApellido(e.target.value)}
                                onGmailChange={(e) => setGmail(e.target.value)}
                                onPasswordChange={(e) => setPassword(e.target.value)}
                                onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
                                enviando={enviando}
                            />
                            {enviando && <p role="status">Registrando usuario...</p>}
                            {errorRegistro && (
                                <p role="alert" className="text-danger">
                                    {errorRegistro}
                                </p>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterForm;
