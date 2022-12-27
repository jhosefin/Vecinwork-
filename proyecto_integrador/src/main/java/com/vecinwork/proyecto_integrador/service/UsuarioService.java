package com.vecinwork.proyecto_integrador.service;

import java.util.List;

import com.vecinwork.proyecto_integrador.model.Usuario;

public interface UsuarioService {
    
    Usuario getUsuario(Integer id);

    Usuario save (Usuario usuario);

    void delete (Integer id);

    List<Usuario> getAllUsers();


}
