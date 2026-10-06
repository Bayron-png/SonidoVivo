import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CamposRegister from "../molecules/CamposRegister";
import TituloRedondeado from "../atoms/TituloRedondeado";

const RegisterForm = ({ onSubmit }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [rut, setRut] = useState("");
    const [gmail, setGmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formularioEnviado = (e) => {
        e.preventDefault();
        onSubmit({
            nombre, apellido, rut,
            gmail, telefono,
            password, confirmPassword
        });
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
