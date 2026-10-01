import LoginForm from "../../components/organisms/LoginForm";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

function Login() {
  return (
    <div className="contenedor-general">
      <main className="contenedor-contenido">
        <Header/>
        <LoginForm />
        <Footer/>
      </main>
    </div>
  );
}

export default Login;
