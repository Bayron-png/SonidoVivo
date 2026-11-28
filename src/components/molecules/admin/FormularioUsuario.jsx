import { useEffect, useState } from "react";

const formularioInicial = {
    nombre: "",
    correo: "",
    password: "",
    rol_id: "2"
};

const FormularioUsuario = ({
    usuarioEditando,
    onGuardar,
    onCancelar,
    procesando
}) => {
    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        if (usuarioEditando) {
            setFormulario({
                nombre: usuarioEditando.nombre,
                correo: usuarioEditando.correo,
                password: "",
                rol_id: String(usuarioEditando.rol_id)
            });
        } else {
            setFormulario(formularioInicial);
        }
    }, [usuarioEditando]);

    const actualizarCampo = (event) => {
        const { name, value } = event.target;

        setFormulario((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const enviarFormulario = async (event) => {
        event.preventDefault();

        const datos = {
            nombre: formulario.nombre.trim(),
            correo: formulario.correo.trim(),
            rol_id: Number(formulario.rol_id)
        };

        if (!usuarioEditando) {
            datos.password = formulario.password;
        }

        const exito = await onGuardar(datos);

        if (exito && !usuarioEditando) {
            setFormulario(formularioInicial);
        }
    };

    return (
        <section className="card shadow-sm mb-4">
            <div className="card-body">
                <h2 className="h5 mb-3">
                    {usuarioEditando
                        ? "Editar usuario"
                        : "Crear usuario"}
                </h2>

                <form onSubmit={enviarFormulario}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="usuarioNombre" className="form-label">
                                Nombre
                            </label>

                            <input
                                id="usuarioNombre"
                                name="nombre"
                                type="text"
                                className="form-control"
                                value={formulario.nombre}
                                onChange={actualizarCampo}
                                maxLength={100}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="usuarioCorreo" className="form-label">
                                Correo
                            </label>

                            <input
                                id="usuarioCorreo"
                                name="correo"
                                type="email"
                                className="form-control"
                                value={formulario.correo}
                                onChange={actualizarCampo}
                                maxLength={150}
                                required
                            />
                        </div>

                        {!usuarioEditando && (
                            <div className="col-md-6">
                                <label htmlFor="usuarioPassword" className="form-label">
                                    Contraseña
                                </label>

                                <input
                                    id="usuarioPassword"
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    value={formulario.password}
                                    onChange={actualizarCampo}
                                    minLength={8}
                                    required
                                />
                            </div>
                        )}

                        <div className="col-md-6">
                            <label htmlFor="usuarioRol" className="form-label">
                                Rol
                            </label>

                            <select
                                id="usuarioRol"
                                name="rol_id"
                                className="form-select"
                                value={formulario.rol_id}
                                onChange={actualizarCampo}
                                required
                            >
                                <option value="1">Administrador</option>
                                <option value="2">Cliente</option>
                                <option value="3">Vendedor</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-flex gap-2 mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={procesando}
                        >
                            {procesando
                                ? "Guardando..."
                                : usuarioEditando
                                    ? "Guardar cambios"
                                    : "Crear usuario"}
                        </button>

                        {usuarioEditando && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onCancelar}
                                disabled={procesando}
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormularioUsuario;