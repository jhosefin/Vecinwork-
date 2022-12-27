import React, { useState, useEffect } from "react";

const initialUsuario = {
    usuario_id: "",
    nombre: "",
    apellidos: "",
    contrasenia: "",
    passwordRepeated: "",
    fechaNacimiento: "",
    correo: "",
    numTelefonico: "",
    region: "",
    comuna: "",
    direccion: "",
    numDocumento: "",

};

const FormularioRegistro = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {

    const [usuario, setUsuario] = useState(initialUsuario);
    const { usuario_id, nombre, apellidos, contrasenia, passwordRepeated, fechaNacimiento, correo, numTelefonico, region, comuna, direccion, numDocumento } = usuario;

    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado);
        } else {
            setUsuario({
                usuario_id: "",
                nombre: "",
                apellidos: "",
                contrasenia: "",
                passwordRepeated: "",
                fechaNacimiento: "",
                correo: "",
                numTelefonico: "",
                region: "",
                comuna: "",
                direccion: "",
                numDocumento: "",
            }
            );
        }

    }, [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value,
        }
        setUsuario(changedFormValue);
    }

    return (
        <div class="container mt-md-5 mb-md-5" id="containerFormularioRegistro">
            <form class="ms-md-3 me-md-3">
                {usuarioEditado !== null ? <h1>Editar usuario</h1> : <h1>Ingrese usuario</h1>}
                <div class="mb-3">
                    <h3 class="d-md-flex justify-content-md-center mt-md-4 mb-md-4 fs-2">Regístrate</h3>
                    <h4 class="fs-5 mb-md-4">Datos Básicos</h4>
                </div>
                <div class="row">
                    <div class="col">
                        <input
                            type="hidden"
                            placeholder="ID"
                            class="form-control"
                            id="exampleID"
                            name="usuario_id"
                            value={usuario_id}
                            onChange={handleInputChange}
                            disabled />
                    </div>

                </div>
                <div class="row">

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Nombres"
                            class="form-control"
                            id="exampleInputNombres"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Apellidos"
                            class="form-control"
                            id="exampleInputApellidos"
                            name="apellidos"
                            value={apellidos}
                            onChange={handleInputChange} />
                    </div>

                </div>

                <div class="row">

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Fecha de nacimiento (yyyy-mm-dd)"
                            class="form-control"
                            id="exampleInputFechaNacimiento"
                            name="fechaNacimiento"
                            value={fechaNacimiento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Teléfono"
                            class="form-control"
                            id="exampleInputTelefono"
                            name="numTelefonico"
                            value={numTelefonico}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div class="col">
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            class="form-control"
                            id="exampleInputEmail"
                            name="correo"
                            value={correo}
                            onChange={handleInputChange} />
                    </div>



                </div>


                <div class="row">

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Región"
                            class="form-control"
                            id="exampleInputRegion"
                            name="region"
                            value={region}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Comuna"
                            class="form-control"
                            id="exampleInputComuna"
                            name="comuna"
                            value={comuna}
                            onChange={handleInputChange} />
                    </div>

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Dirección"
                            class="form-control"
                            id="exampleInputDirección"
                            name="direccion"
                            value={direccion}
                            onChange={handleInputChange} />
                    </div>
                </div>



                <div class="row">
                    <div class="col">
                        <select class="form-select form-select-sm ">
                            <option>RUT</option>
                        </select>
                    </div>

                    <div class="col">
                        <input
                            type="text"
                            placeholder="Número de documento"
                            class="form-control"
                            id="exampleInputNumDocumento"
                            name="numDocumento"
                            value={numDocumento}
                            onChange={handleInputChange} />
                    </div>

                </div>

                <div>
                    <h3 class="fs-5 mt-md-4 mb-md-4">Privacidad</h3>
                </div>

                <div class="row">

                    <div class="col">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            class="form-control"
                            id="exampleInputPassword"
                            name="contrasenia"
                            value={contrasenia}
                            onChange={handleInputChange} />
                    </div>

                    <div class="col"></div>
                </div>

                <div class="row">

                    <div class="col">
                        <input
                            type="password"
                            placeholder="Repetir contraseña"
                            class="form-control"
                            id="exampleInputPasswordRepeated"
                            name="passwordRepeated"
                            value={passwordRepeated}
                            onChange={handleInputChange} />
                    </div>

                    <div class="col"></div>
                </div>




                <div class="mb-3 form-check mt-md-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label id="tituloTerminosCondiciones" class="form-check-label" for="exampleCheck1">Acepto los <a href="www.google.com">Términos y Condiciones</a></label>
                </div>
                <div class="d-md-flex justify-content-md-center">
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userEdit(usuario)}
                        >
                            Editar usuario
                        </button>
                    ) : (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userAdd(usuario)}
                        >
                            Ingresar usuario
                        </button>
                    )}
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => setUsuarioEditado(null)}
                        >
                            Cancelar
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    <h6 id="tituloIniciarSesion" class="mb-md-3">¿Ya tienes una cuenta? <a href="wwww.google.com">Iniciar sesión</a></h6>
                </div>
            </form>
        </div>
    );
};

export default FormularioRegistro;