package com.vecinwork.proyecto_integrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vecinwork.proyecto_integrador.model.Publicacion;
import com.vecinwork.proyecto_integrador.service.PublicacionService;

@CrossOrigin("*")
@RestController
public class PublicacionController {

    private PublicacionService publicacionService;

    public PublicacionController (@Autowired PublicacionService publicacionService){
        this.publicacionService = publicacionService;
    }

    @PostMapping(value = ("/Publicacion/save"), consumes = {"application/json"})

    public void guardarPublicacion(@RequestBody Publicacion publicacion){
        publicacionService.savePublicacion(publicacion);
    }

    @PostMapping("/Publicacion/update")
    public void actualizarPublicacion(@RequestBody Publicacion publicacion){
        publicacionService.updatePublicacion(publicacion);
    }

    @GetMapping("/Publicacion/findAll")
    public List<Publicacion> todasLasPublicacion(){
        return publicacionService.findAll();
    }

    @GetMapping("/Publicacion/eliminarPublicacion/{id}")
    public void deletePublicacion(@PathVariable Integer id){
        publicacionService.eliminarPublicacion(id);
    }


}
