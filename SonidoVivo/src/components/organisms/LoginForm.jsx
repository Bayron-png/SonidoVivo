import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LoginForm from '../molecules/LoginForm';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login enviado:', { email, password });
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Botón flotante superior */}
      <div className="p-3">
        <Button 
          variant="primary" 
          size="sm" 
          className="rounded-pill px-3"
          style={{ backgroundColor: '#1340a1', borderColor: '#1340a1' }}
        >
          &larr; Volver al menú
        </Button>
      </div>

      {/* Contenido principal del login */}
      <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center my-4">
        {/* Título azul redondeado */}
        <div 
          className="text-white text-center fw-bold fs-3 mb-5 px-5 py-2 rounded-pill shadow-sm"
          style={{ backgroundColor: '#1340a1', minWidth: '220px' }}
        >
          Iniciar sesión
        </div>

        {/* Formulario adaptativo con Bootstrap Grid */}
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={6} lg={4}>
            <Form onSubmit={handleSubmit}>
              <LoginFormFields 
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