import React from "react";
import "./css/style.css";
import lavadora from "./img/lavadora.png";
import electricista from "./img/electricista.jpg";
import plomero from "./img/plomero.jpg";
import cuidado from "./img/cuidado.jpg";
import publi1 from "./img/publi1.jpg";
import publi2 from "./img/publi2.jpg";
import publi3 from "./img/publi3.jpg";
import publi4 from "./img/publi4.jpg";

const ChatComponent = () => {
  return (
    <div id="contenedorChat" class="container-xxl">
      <div class="container-xl">
      <h1>Arturo Petrolino</h1>
      <h2>Reparación de lavadora</h2>

      <div class="container" id="galeriaPublicacion2">
      <div class="carousel slide" data-bs-ride="carousel">
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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ubicación</th>
            <th scope="col">Precio</th>
            <th scope="col">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Santiago, Chile</td>
            <td>$50.000</td>
            <td>Lunes a viernes de 09:00 a 19:00</td>
          </tr>
        </tbody>
      </table>
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
      
      <button type="button" class="botonSolicita btn "><div class="letra2">Quiero Este Servicio</div></button>
      <div class="position-absolute top-50 start-50">
        <h2>Envia tu mensaje</h2>
      <textarea id="chatear" placeholder="Hola Ingresa tu mensaje">
      </textarea>
      <br></br>
      <div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Enviar</button>
{/*       <button type="submit" class="botonEnviar btn"><div class="letra">Enviar</div></button> */}
      </div>
<br></br>
<div class="interesar">
  <br></br>
      <h3> Te podria interesar</h3>
      <br></br>
      <div class="tarjeta">
      <div class="card row align-items-start" style={{width: '18rem'}}>
      <img src={electricista} class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text">Electricista.</p>
      </div>
      </div>
      <div class="card row align-items-start" style={{width: '18rem'}}>
      <img src={plomero} class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text">Plomero.</p>
      </div>
      </div>
      <div class="card row align-items-start" style={{width: '18rem'}}>
      <img src={cuidado} class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text">Cuidado de Adultos.</p>
      </div>
      </div>
      </div>
      </div>
    </div>
    <br></br>
    </div>
    
  );
};

export default ChatComponent;
