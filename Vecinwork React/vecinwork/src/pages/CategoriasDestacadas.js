import React from "react";
import { ListaPublicaciones, NavbarComponent, FooterComponent } from "../components";
import "./css/stylePages.css";

const CategoriasDestacadasPage = () => {

    

    return (
        <div>
            <NavbarComponent/>
        <body class="container" id="todofondo">
            <div  id="destacados">
                <ListaPublicaciones />
                </div>
        </body>
        <FooterComponent/>
        </div>
    )
}

export default CategoriasDestacadasPage;