import FormularioUsuario from "../molecules/admin/FormularioUsuario";
import ListaUsuarios from "../organisms/admin/ListaUsuarios";
import EstadoConsulta from "../molecules/estados/EstadoConsulta";

const AdminGestionUsuariosTemplate = ({
    usuarios,
    usuarioEditando,
    usuarioActualId,

    cargando,
    procesando,
    error,
    errorAccion,
    mensaje,

    cargarUsuarios,
    guardarUsuario,
    desactivar,
    activar,
    seleccionarUsuario,
    cancelarEdicion
}) => {
    return (
        <section aria-labelledby="titulo-usuarios">
            <h1 id="titulo-usuarios" className="h2 mb-4">
                Gestión de usuarios
            </h1>

            {mensaje && (
                <p className="alert alert-success" role="status">
                    {mensaje}
                </p>
            )}

            {errorAccion && (
                <p className="alert alert-danger" role="alert">
                    {errorAccion}
                </p>
            )}

            <FormularioUsuario
                usuarioEditando={usuarioEditando}
                onGuardar={guardarUsuario}
                onCancelar={cancelarEdicion}
                procesando={procesando}
            />

            <EstadoConsulta
                cargando={cargando}
                error={error}
                onReintentar={cargarUsuarios}
                mensajeCarga="Cargando usuarios..."
            />

            {!cargando && !error && (
                <ListaUsuarios
                    usuarios={usuarios}
                    onEditar={seleccionarUsuario}
                    onDesactivar={desactivar}
                    onActivar={activar}
                    procesando={procesando}
                    usuarioActualId={usuarioActualId}
                />
            )}
        </section>
    );
};

export default AdminGestionUsuariosTemplate;