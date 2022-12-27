import React from "react";
import logoVecinwork from "./img/logoVecinwork.jpg"
import mdiGoogle from "./img/mdi_google.jpg"
import './css/style.css'

const IngresoUsuario = () => {
    return (

        <div class="container mt-md-5" id="containerIngresoUsuario">

            <div class="d-md-flex justify-content-md-center">
                <img src={logoVecinwork} alt="LOGO VECINWORK" class="mt-md-4"></img>
            </div>
            <div>
                <h2 class="mt-md-4" id="tituloBienvenida">¡Te damos la bienvenida!</h2>

                <form>
                    <div class="mb-3 ms-md-3 me-md-4">
                        <label for="exampleInputEmail1" class="form-label mt-md-4" >Correo electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo electrónico" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3 ms-md-3 me-md-4">
                        <label for="exampleInputPassword1" class="form-label mt-md-3" >Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" />
                    </div>
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
                    </div> */}
                    <div>
                        <h6 id="tituloOlvidasteContrasenia">¿Olvidaste tu contraseña? <a href="www.google.com">Recupérala</a></h6>
                    </div>
                    <div class="d-grid gap-2 col-7 mx-auto  mt-md-3">

                        <button id="botonIngresoUsuario" type="submit" class="btn btn-warning mt-md-2 mb-md-3"><b>INICIAR SESIÓN</b></button>
                    </div>

                    <div id="divBotonIngresoUsuario2" class="d-grid gap-2 col-7 mx-auto ">
                        <button id="botonIngresoUsuario2" type="submit" class="btn btn-white"><img id="mdiGoogle" src={mdiGoogle}></img><b>CONTINUAR CON GOOGLE</b></button>
                    </div>
                </form>


                <div>
                    <h6 id="tituloSinCuenta" class="mt-md-4 mb-md-3">¿No tienes una cuenta? <a href="www.google.com">Regístrate</a></h6>
                </div>
            </div>
        </div>

    );
};

export default IngresoUsuario;