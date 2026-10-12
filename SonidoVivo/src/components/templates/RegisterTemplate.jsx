import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BotonVolver from "../atoms/botones/BotonVolver";
import RegisterForm from "../organisms/RegisterForm"

const RegisterTemplate = ({ onRegisterSubmit }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            {/* Contenido dinámico que cambia según la pantalla */}
            <main className="flex-grow-1 container pt-5 mb-4">
                <BotonVolver label="← Volver a inicio de sesión" ruta="/login" />
                <RegisterForm onSubmit={onRegisterSubmit} />
            </main>

            <Footer />
        </div>
    );
};

export default RegisterTemplate;
