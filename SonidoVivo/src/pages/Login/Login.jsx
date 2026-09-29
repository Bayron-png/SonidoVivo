import LoginForm from "../../components/organisms/LoginForm";
import Header from "../../components/organisms/Header";

function Login() {
  return (
    <div className="contenedor-general">
      <main className="contenedor-contenido">
        <Header/>
        <LoginForm />
      </main>
    </div>
  );
}

export default Login;
