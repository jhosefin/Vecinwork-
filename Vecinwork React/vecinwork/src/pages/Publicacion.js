import React from "react";
import { Publicacion, NavbarComponent, FooterComponent } from "../components";

const PublicacionPage = () => {

    return (
        <div>
        <NavbarComponent/>
        <body class="container" id="todofondo">
                <div  id="publicacionPage">
                <Publicacion />
                </div>
        </body>
        <FooterComponent/>
        </div>
    )
}

export default PublicacionPage;