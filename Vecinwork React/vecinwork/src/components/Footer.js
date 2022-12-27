import React from "react";
import "./css/style.css";
import Group12 from "./img/Group12.png";
import logovecin from "./img/logovecin.png";
import chile from "./img/chile.png";

const FooterComponent = () => {
  return (
    <div class="container-fluid" id="footer">
    
      <div>
        <br></br>
        <img src={Group12} class="card-img-top" alt="..."></img>
      </div>
      <div class="logovecin">
        <br></br>
        <img src={logovecin} class="card-img-top" alt="..."></img>
      </div>
      <div>
        <h9>Servicios</h9>
        <ul>
            <li><small>Mi cuenta</small></li>
            <li><small>Contacto</small></li>
            <li><small>Preguntas frecuentes</small></li>
        </ul>
        </div>

        <div>
        <h9>Corporativo</h9>
        <ul>
            <li><small>¿Quienes Somos?</small></li>
            <li><small>Terminos y condiciones</small></li>
            <li><small>Política de privacidad</small></li>
        </ul>
        </div>
        <div>
            <h9>Estamos presentes en:            </h9>
            <br></br>
        <img src={chile} class="imgChile" alt="..."></img>
        <br></br>
      </div>
      <i class="bi-github" role="img" aria-label="GitHub"></i>
    </div>

  );
};

export default FooterComponent;
