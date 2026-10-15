import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CamposLogin from "../../molecules/formularios/CamposLogin";
import TituloRedondeado from "../../atoms/TituloRedondeado";
import { validarCorreoLogin } from "../../../utils/validaciones/validacionCorreoLogin";
import { useNavigate } from "react-router-dom";

// usuarios ficticios para la simulacion de login
const usuariosDemo = [
  {
    correo: "sonidovivo@gmail.com",
    password: "1234567A"
  }
];

const LoginForm = ({onSubmit}) => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCredenciales, setErrorCredenciales] = useState(false);

  const navigate = useNavigate();

  const formularioEnviado = (e) => {
    e.preventDefault();

    // Comprueba que el correo cumpla el formato
    const errorCorreo = validarCorreoLogin(gmail);

    if (errorCorreo) {
      return;
    }

    //comprueba que correo y contraseña coincidan con los datos de prueba
    const usuarioEncontrado = usuariosDemo.find(
      (usuario) =>
        usuario.correo === gmail.trim() &&
        usuario.password === password
    );

    // Si no existe coincidencia, marca error
    if (!usuarioEncontrado) {
      setErrorCredenciales(true);
      return;
    }

    // Si las credenciales son correctas, limpia el error
    setErrorCredenciales(false);

    // Envía los datos al componente padre
    if (onSubmit){  
      onSubmit({gmail: gmail.trim(), password});
    }

    navigate("/")
  };

  return (
    <div className = "contenedor-loginform">
      {/* Contenido principal del login */}
      <Container className="tarjeta-login">
        {/* Título azul redondeado */}
        <div className="titulo-login">
          <TituloRedondeado texto= "Iniciar Sesión"/>
        </div>

        {/* Formulario adaptativo con Bootstrap Grid */}
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={6} lg={4}>
            <Form onSubmit={formularioEnviado}>
              <CamposLogin
                gmail={gmail}
                password={password}
                onGmailLoginChange={(e) => {setGmail(e.target.value); setErrorCredenciales(false);}}
                onPasswordLoginChange={(e) => {setPassword(e.target.value); setErrorCredenciales(false);}}
                validarCorreoLogin={validarCorreoLogin}
                errorCredenciales={errorCredenciales}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
