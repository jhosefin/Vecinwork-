package com.vecinwork.proyecto_integrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vecinwork.proyecto_integrador.model.Servicios;
import com.vecinwork.proyecto_integrador.service.ServiciosService;

@RestController
@CrossOrigin("*")
public class ServiciosController {
    
        private ServiciosService serviciosService;
    
        public ServiciosController(@Autowired ServiciosService serviciosService) {
            this.serviciosService = serviciosService;
    
        }
    
    
        @PostMapping("/Servicios/save")
        public void guardarServicios(@RequestBody Servicios servicios){
            serviciosService.saveServicios(servicios);
        }
    
        @PutMapping("/Servicios/update")
        public void actualizarServicios(@RequestBody Servicios servicios){
            serviciosService.updateServicios(servicios);
        }

        @GetMapping("/SServicios/findAll")
        public List<Servicios> todasLosServicios(){
            return serviciosService.findAll();
        }  
    
        @GetMapping("/Servicios/eliminarServicios/{id}")
        public void deleteServicios(@PathVariable Integer id){
    
            serviciosService.eliminarServicios(id);
        }
        
    }
