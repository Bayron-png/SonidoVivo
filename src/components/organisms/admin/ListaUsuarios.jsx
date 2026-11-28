const ListaUsuarios = ({
    usuarios = [],
    onEditar,
    onDesactivar,
    onActivar,
    procesando,
    usuarioActualId
}) => {
    if (usuarios.length === 0) {
        return (
            <p className="alert alert-info">
                No hay usuarios registrados.
            </p>
        );
    }

    const confirmarDesactivacion = (usuario) => {
        const confirmado = window.confirm(
            `¿Quieres desactivar a ${usuario.nombre}?`
        );

        if (confirmado) {
            onDesactivar(usuario.id);
        }
    };

    return (
        <section aria-label="Listado de usuarios">
            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>

                                <td>{usuario.nombre}</td>

                                <td>{usuario.correo}</td>

                                <td>{usuario.rol}</td>

                                <td>
                                    <span
                                        className={`badge ${usuario.activo
                                                ? "bg-success"
                                                : "bg-danger"
                                            }`}
                                    >
                                        {usuario.activo ? "Activo" : "Inactivo"}
                                    </span>
                                </td>

                                <td>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => onEditar(usuario)}
                                            disabled={procesando}
                                        >
                                            Editar
                                        </button>

                                        {usuario.activo ? (
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => confirmarDesactivacion(usuario)}
                                                disabled={
                                                    procesando ||
                                                    Number(usuario.id) === Number(usuarioActualId)
                                                }
                                            >
                                                Desactivar
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-success"
                                                onClick={() => onActivar(usuario.id)}
                                                disabled={procesando}
                                            >
                                                Activar
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ListaUsuarios;