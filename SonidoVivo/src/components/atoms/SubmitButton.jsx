import React from 'react';

const SubmitButton = ({ label = "Iniciar sesion" }) => (
  <button 
    type="submit" 
    className="btn btn-primary" 
    style={{ backgroundColor: '#3b62cc', borderColor: '#3b62cc' }}
  >
    {label}
  </button>
);

export default SubmitButton;