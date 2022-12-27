import React from "react";


const TablaRegistro = ({ usuarios, deleteUser, setUsuarioEditado }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Región</th>
            <th scope="col">Comuna</th>
            <th scope="col">Dirección</th>
            <th scope="col">Número de documento</th>


          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr>


              <td>
                {usuario.usuario_id}
              </td>
              <td>
                {usuario.nombre}
              </td>
              <td>
                {usuario.apellidos}
              </td>
              <td>
                {usuario.contrasenia}
              </td>
              <td>
                {usuario.fechaNacimiento}
              </td>
              <td>
                {usuario.correo}
              </td>
              <td>
                {usuario.numTelefonico}
              </td>
              <td>
                {usuario.region}
              </td>
              <td>
                {usuario.comuna}
              </td>
              <td>
                {usuario.direccion}
              </td>
              <td>
                {usuario.numDocumento}
              </td>


              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    deleteUser(usuario.usuario_id);
                  }}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario);
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default TablaRegistro;