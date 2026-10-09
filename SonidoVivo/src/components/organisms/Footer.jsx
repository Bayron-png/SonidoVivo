import TextoFooter from "../atoms/footer/TextoFooter";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="contenedor-footer
                       d-flex
                       py-3
                       justify-content-center
                       align-items-center
                       text-center">
      <TextoFooter />
    </footer>
  );
};

export default Footer;