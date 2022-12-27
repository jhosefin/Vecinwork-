import React, {useState,useEffect,useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { FormularioRegistro, TablaRegistro, FooterComponent, NavbarComponent } from "../components";
import {addUser,editUser,getAllUsers,deleteUser} from '../services/User';


const usuario = [
    {
        usuario_id: 1,
        nombre: "Rebeca",
        apellidos: "Martínez",
        contrasenia: "rebeca123",
        passwordRepeated: "rebeca123",
        fechaNacimiento: "13-10-1997",
        correo: "rebeca@gmail.com",
        numTelefonico: 1111111,
        region: "Metropolitana",
        comuna: "Peñalolén",
        direccion: "av. aaa 1289",
        numDocumento: "1111111"

    },

    {
        usuario_id: 2,
        nombre: "Felipe",
        apellidos: "Vidal",
        contrasenia: "felipe123",
        passwordRepeated: "felipe123",
        fechaNacimiento: "01-01-1995",
        correo: "felipe@gmail.com",
        telefono: 2222222,
        region: "Metropolitana",
        comuna: "Peñalolén",
        direccion: "av. aaa 1289",
        numDocumento: "2222222",


    },
    {
        usuario_id: 3,
        nombre: "Constanza",
        apellidos: "Vallejos",
        contrasenia: "constanza123",
        passwordRepeated: "constanza123",
        fechaNacimiento: "12-12-2000",
        correo: "constanza@gmail.com",
        telefono: 33333333,
        region: "BioBío",
        comuna: "Lejos",
        direccion: "av. muy lejos 1289",
        numDocumento: "33333333",


    }
]

const Usuario = () => {
    //En este momento state vale lo mismo que usuario1
    //por dentro, setState genera una funcion setteadora que me va a permitir cambiar los datos de usuario 1 sin afectarlo directamente
    const [user, setUser] = useState(usuario);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const usuariosBD = await getAllUsers();
        setUser(usuariosBD);
    }

    const userAdd = async (usuarioAgregado) => {
        //en esta linea agregamos usuario a bbdd
        const usuarioBD = await addUser(usuarioAgregado);
        //aqui haremos que la tabla se actualice
        window.location.href = "/Destacados";
  /*       getUsers(); */
    }

    const userEdit = async (usuarioEditado) => {
        const usuarioBD = await editUser(usuarioEditado);
        getUsers();
    }

    const userDelete = async (idUsuario) => {
        const usuarioBD = await deleteUser(idUsuario);
        getUsers();
    }

    return (
        <div>
        <NavbarComponent/>
        <div class="container w-50">
            <FormularioRegistro userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />
            <TablaRegistro usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} />
        </div>
        <FooterComponent/>
        </div>
    );
};

export default Usuario;