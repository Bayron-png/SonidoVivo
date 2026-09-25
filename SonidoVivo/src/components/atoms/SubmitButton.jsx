import React from 'react';
import { Button } from 'react-bootstrap';

const submitButton = ({ label = "Iniciar sesion" }) => (
  <Button 
    variant="primary" 
    type="submit" 
    style={{ backgroundColor: '#3b62cc', borderColor: '#3b62cc' }}
  >
    {label}
  </Button>
);

export default submitButton;