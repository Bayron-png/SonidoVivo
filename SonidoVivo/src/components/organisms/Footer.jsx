import React from 'react';
import TextoFooter from "../atoms/footer/TextoFooter";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="contenedor-footer py-3 text-center d-flex align-items-center justify-content-center">
      <TextoFooter />
    </footer>
  );
};

export default Footer;