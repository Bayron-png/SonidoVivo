import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import LoginForm from "../organisms/LoginForm";

const LoginTemplate = ({onLoginSubmit}) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Contenido dinámico que cambia según la pantalla */}
      <main className="flex-grow-1 container my-4">
        <LoginForm onSubmit={onLoginSubmit}/>
      </main>

      <Footer />
    </div>
  );
};

export default LoginTemplate;
