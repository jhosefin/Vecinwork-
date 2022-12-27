import React from "react";
import publi1 from "./img/publi1.jpg";
import publi2 from "./img/publi2.jpg";
import publi3 from "./img/publi3.jpg";
import publi4 from "./img/publi4.jpg";
import { Link } from "react-router-dom";

const Publicacion = () => {
  return (

    <body class="container" id="publicacion">

      <div class="container" id="galeriaPublicacion">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={publi1} id="imgpubli" class=" " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={publi2} id="imgpubli" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={publi3} id="imgpubli" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={publi4} id="imgpubli" class="d-block " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
     {/*  acá termina el carrusel */}

     <div class="container" id="encabezado">
     <h1 id="nombrepubli">Arturo Petrolino</h1>
     <h2>Reparación de lavadoras y refrigeradores</h2>
     </div>

     {/* acá termina el encabezado */}

     <div class="container" id="publicaciondatos">
     <table class="table table-borderless">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ubicación</th>
      <td>Santiago, Chile</td>  
    </tr>
    <tr>
      <th scope="row">Precio</th>
      <td>$50.000</td>  
    </tr>
    <tr>
      <th scope="row">Disponibilidad</th>
      <td>Lunes a viernes de 09:00 a 19:00</td>  
    </tr>
   
    
  </tbody>
</table>
</div>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        DESCRIPCIÓN DE ACTIVIDADES DEL SERVICIO
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">            
              Realizo reparación de diferentes tipos y marcas de artefactos
              eléctricos.<code> Experiencia de 10 años</code>, especialista en lavadoras y
              refrigeradores. Incluye garantía de 6 meses.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        CONDICIONES
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul>
        <li>El aparato debe estar ubicado en el lugar de armado y debe existir el espacio necesario para su correcto armado.</li>
        <li>Valor de servicio es válido solo para un aparato.</li>
        <li>Evite que niños y mascotas circulen en el entorno donde se realizará el trabajo.</li>
        <li>El servicio inicia en el rango horario contratado.</li>
        <li>Se recomienda que la persona que contrata el servicio esté en el domicilio durante la ejecución de éste o bien antes del término. Para que así pueda verificar la realización de las labores solicitadas.</li>
        <li>Se recomienda no dejar cosas de valor en el domicilio durante la ejecución del servicio.</li>
        </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        EXCLUSIONES
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul>
        <li>No incluye modificaciones de productos, trabajos de electricidad ni gasfitería.</li>
        <li>No incluye retiro escombros, basura queda en sacos al interior del domicilio donde el cliente disponga.</li>
        </ul></div>
    </div>
  </div>
</div>
      
{/* acá terminan los datos */}
<div class="container" id="publicacionbotones">

                <Link className="btn btn-primary" to="/Chat">
                Contactar
                </Link>
<a href="#" class="btn btn-primary" id="loquiero">Lo quiero</a>



</div>
    </body>
  )
}

export default Publicacion;

