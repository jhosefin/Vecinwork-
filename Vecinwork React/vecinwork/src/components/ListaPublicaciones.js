import React from "react";
import electronica from "./img/electronica.png";
import jardineria from "./img/jardineria.jpg";
import pasteleria from "./img/pasteleria.jpg";
import publi2 from "./img/publi2.jpg";
import "./css/style.css";

const ListaPublicaciones = () => {

  
 
    return (
   
<body class="container" id="tarjetasDestacados">
  {/* <!-- Inicio de las tarjetas --> */}
  <h3 id="titulodestacadas">Categorías destacadas</h3>
  <div class="card" id="zoom">
  <figure id="cardzoom"><img src={pasteleria} alt="Imagen de la categoría 1"/></figure>
    <div class="card-content">
      <h3 class="card-title">Pastelería</h3>
      
    </div>
  </div>
  <div class="card" id="zoom">
    <figure id="cardzoom"><img src={jardineria} alt="Imagen de la categoría 2"/></figure>
    <div class="card-content">
      <h3 class="card-title">Jardinería</h3>
      
    </div>
  </div>
  <div class="card" id="zoom">
    <figure id="cardzoom"><img src={electronica} alt="Imagen de la categoría 3"/></figure>
    <div class="card-content">
      <h3 class="card-title">Electrónica</h3>
      
    </div>
  </div>
  {/* <!-- Fin de las tarjetas --> */}

  <div id="publicacionesCategoria">
    <h3 id="tituloCategorias">Publicaciones en la categoría</h3>

  </div>

  <div class="card mb-3" id="listaPublicaciones">
  <div class="row g-0">
    <div class="col-md-2">
      <img class="img-fluid rounded-start" id="imgenLista" src={publi2}  alt="..."/>
    </div>
    <div class="col-md-10">
      <div class="card-body" id="lista">
        <h5 class="card-title">Reparación de lavadoras y refrigeradores</h5>
        <p class="card-text">Realizo reparaciones de diferentes tipos y marcas de artefactos eléctricos.
        Experiencia de 10 años, especialista en lavadoras y refrigeradores.
        Incluye garantía de 6 meses.</p>
        <a href="#" class="btn btn-primary" id="vermaslista">Ver más</a>
      </div>
    </div>
  </div>
</div>

  
  
</body>

    )

}

export default ListaPublicaciones;