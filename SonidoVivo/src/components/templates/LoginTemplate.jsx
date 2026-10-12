import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BotonVolver from "../atoms/botones/BotonVolver";
import LoginForm from "../organisms/LoginForm";

const LoginTemplate = ({onLoginSubmit}) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      {/* Contenido dinámico que cambia según la pantalla */}
      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver label="← Volver al menú principal" ruta="/" />
        <LoginForm onSubmit={onLoginSubmit}/>
      </main>

      <Footer />
    </div>
  );
};

export default LoginTemplate;
