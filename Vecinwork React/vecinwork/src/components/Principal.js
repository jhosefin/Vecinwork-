import React from "react";
import "./css/style.css";
import perfil from "./img/perfil.png";
import solicita from "./img/solicita.png";
import contactate from "./img/contactate.png";
import evalua from "./img/evalua.png";
import Group9 from "./img/Group9.png";
import Group10 from "./img/Group10.png";

const PrincipalComponent = () => {
  return (
    <div class="container-xxs">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Group10} class="d-block w-100 " alt="banner1"></img>
          </div>
          <div class="carousel-item">
            <img src={Group9} class="d-block w-100" alt="banner2"></img>
          </div>
          <div class="carousel-item">
            <img src={Group9} class="d-block w-100" alt="banner3"></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br   />
      <div class="container-sm">
        <h3>Encuentra en tu comunidad o alrededores lo que necesites</h3>
        <h2 style={{color:'#F19F23'}}>Fácil y Rápido.</h2>
      </div>
      <br />
      <div class="tarjetas">
        <br />
      <div class="card row align-items-start" style={{width: '18rem'}}>
  <img src={perfil} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Crear perfil.</p>
  </div>
</div>
<div class="card row align-items-center" style={{width: '18rem'}}>
  <img src={solicita} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Solicita o publica.</p>
  </div>
</div>
<div class="card row align-items-center" style={{width: '18rem'}}>
  <img src={contactate} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Contactate.</p>
  </div>
</div>
<div class="card row align-items-center" style={{width: '18rem'}}>
  <img src={evalua} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Evalua.</p>
  </div>
</div>
<br />
</div>
    </div>
  );
};

export default PrincipalComponent;
