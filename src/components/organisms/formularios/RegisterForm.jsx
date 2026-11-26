import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CamposRegister from "../../molecules/formularios/CamposRegister";
import TituloRedondeado from "../../atoms/TituloRedondeado";
import { useNavigate } from "react-router-dom";
import { validarNombre } from "../../../utils/validaciones/validacionNombre";
import { validarApellido } from "../../../utils/validaciones/validacionApellido";
import { validarRut } from "../../../utils/validaciones/validacionRut";
import { validarCorreo } from "../../../utils/validaciones/validacionCorreo";
import { validarTelefono } from "../../../utils/validaciones/validacionTelefono";
import { validarPassword } from "../../../utils/validaciones/validacionPassword";
import { validarConfirmPassword } from "../../../utils/validaciones/validacionConfirmPassword";

const RegisterForm = ({ onSubmit }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [rut, setRut] = useState("");
    const [gmail, setGmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const formularioEnviado = (e) => {
        e.preventDefault();

        console.log("1. Se envió el formulario");
        const errores = [
            validarNombre(nombre),
            validarApellido(apellido),
            validarRut(rut),
            validarCorreo(gmail),
            validarTelefono(telefono),
            validarPassword(password),
            validarConfirmPassword(confirmPassword, password)
        ]; 
        console.log("2. Errores encontrados:", errores);
        if (errores.some((error) => error !== "")) {
            console.log("3. Hay errores. No se redirige.");
            return;
        }
            console.log("3. Todos los campos son válidos");
        onSubmit({
            nombre, apellido, rut,
            gmail, telefono,
            password, confirmPassword
        });
        console.log("4. Ejecutando redirección");
        navigate("/");
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
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Form onSubmit={formularioEnviado}>
                            <CamposRegister
                                nombre={nombre}
                                apellido={apellido}
                                rut={rut}
                                gmail={gmail}
                                telefono={telefono}
                                password={password}
                                confirmPassword={confirmPassword}
                                onNombreChange={(e) => setNombre(e.target.value)}
                                onApellidoChange={(e) => setApellido(e.target.value)}
                                onRutChange={(e) => setRut(e.target.value)}
                                onGmailChange={(e) => setGmail(e.target.value)}
                                onTelefonoChange={(e) => setTelefono(e.target.value)}
                                onPasswordChange={(e) => setPassword(e.target.value)}
                                onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterForm;
