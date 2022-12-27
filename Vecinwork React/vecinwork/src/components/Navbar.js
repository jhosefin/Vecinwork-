import React from "react";
import "./css/style.css";
import Group12 from "./img/Group12.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (

    <div class="background">
      <div class="new header col-md-10 position-left">
      <nav class="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top ">

      <div id="BotonesNabvar" class=" container-xs">
        <div>
        <button type="button" class="btn "><div class="letra">Santiago</div></button>
        </div>
        <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Construccion
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Jardineria
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Eventos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cuidado de personas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Carpinteria
                  </a>
                </li>
                <li>
                <Link className="dropdown-item" to="/Publicacion">
                    Electrónico
                    <li id="lavadora">
                    Lavadoras
                </li>
                  </Link>
                </li>
              </ul>
            </li>
            </ul>
            </div>

            <div>
            <form
              id="service-search-form"
              class="hidden-xs hidden-sm hidden-md"
            >
              <div id="search" class="search-container input-group mb-3">
                <input
                  id="desktop-input"
                  class="form-control desktop-input"
                  autoComplete="off"
                  placeholder="Encuentra el servicio que necesitas aquí"
                  aria-describedby="button-addon2"
                />

                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Buscar
                  </button>
                </div>
            </form>
            </div>
            <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Consulta
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inicia sesión/Regístrate
              </a>
              <ul class="dropdown-menu">
                <li>
                <Link className="dropdown-item" to="/Iniciar-Sesion">
                    Mi cuenta
                </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Registro">
                    Registro
                    </Link>
                </li>
                </ul>
                </li>
                </ul>
              </div>
              </div>
              </nav>
              </div>
              <div class="logo col-md-2 position-right" id="containerLogo">
                <Link className="navbar-brand" to="/">
                <img src={Group12} alt="Logo" class="d-inline-block align-text-top"/>
                  </Link>
                </div>

    </div>
  /*   <nav class="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top ">
      <div id="BotonesNabvar" class=" container-xs">
        <div>
        <button type="button" class="btn "><div class="letra">Santiago</div></button>
        </div>
        <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Construccion
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Jardineria
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Eventos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cuidado de personas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Carpinteria
                  </a>
                </li>
                <li>
                <Link className="dropdown-item" to="/Publicacion">
                    Electrónico
                    <li id="lavadora">
                    Lavadoras
                </li>
                  </Link>
                </li>
              </ul>
            </li>
            </ul>
            </div>

            <div>
            <form
              id="service-search-form"
              class="hidden-xs hidden-sm hidden-md"
            >
              <div id="search" class="search-container input-group mb-3">
                <input
                  id="desktop-input"
                  class="form-control desktop-input"
                  autoComplete="off"
                  placeholder="Encuentra el servicio que necesitas aquí"
                  aria-describedby="button-addon2"
                />

                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Buscar
                  </button>
                </div>
            </form>
            </div>
            <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Consulta
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inicia sesión/Regístrate
              </a>
              <ul class="dropdown-menu">
                <li>
                <Link className="dropdown-item" to="/Iniciar-Sesion">
                    Mi cuenta
                </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Registro">
                    Registro
                    </Link>
                </li>
                </ul>
                </li>
                <div class="container" id="containerLogo">
              <li>
                <Link className="navbar-brand" to="/">
                <img src={Group12} alt="Logo"  class="d-inline-block align-text-top"/>
                  </Link>
                </li>
                </div>
              </ul>
              </div>
      </div>
    </nav>*/
  ); 
};

export default NavbarComponent;
