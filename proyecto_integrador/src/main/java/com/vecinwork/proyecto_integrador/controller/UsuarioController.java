package com.vecinwork.proyecto_integrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vecinwork.proyecto_integrador.model.Usuario;
import com.vecinwork.proyecto_integrador.service.UsuarioService;

@CrossOrigin("*")
@RestController
public class UsuarioController {

    private UsuarioService usuarioService;

    public UsuarioController(@Autowired UsuarioService usuarioService) {
        this.usuarioService = usuarioService;

    }


    @GetMapping("/usuario/{id}")
    public Usuario getUsuario(@PathVariable Integer id){
        return usuarioService.getUsuario(id);
    }

    @PostMapping("/usuario")
    public Usuario newUsuario(@RequestBody Usuario usuario){
        return usuarioService.save(usuario);
    }

    @PutMapping("/usuario")
    public Usuario updateUsuario(@RequestBody Usuario usuario){
        return usuarioService.save(usuario);
    }

    @DeleteMapping("/deleteUsuario/{id}")
    public void deleteUsuario(@PathVariable Integer id){

        usuarioService.delete(id);
    }

    @RequestMapping("/allUser")
    public List<Usuario> getAllUsers(){
        List<Usuario> listaUser = usuarioService.getAllUsers();
        return listaUser;
    }
    
}
