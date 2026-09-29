import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CamposLogin from "../molecules/CamposLogin";
import '../../pages/Login/Login.css';
import '../templates/LoginTemplate.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login enviado:", { email, password });
  };

  return (
    <div className = "login-template">
      {/* Contenido principal del login */}
      <Container className="tarjeta-login">
        {/* Título azul redondeado */}
        <div className="titulo-login">
          Iniciar sesión
        </div>

        {/* Formulario adaptativo con Bootstrap Grid */}
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={6} lg={4}>
            <Form onSubmit={handleSubmit}>
              <CamposLogin
                email={email}
                password={password}
                onEmailChange={(e) => setEmail(e.target.value)}
                onPasswordChange={(e) => setPassword(e.target.value)}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
