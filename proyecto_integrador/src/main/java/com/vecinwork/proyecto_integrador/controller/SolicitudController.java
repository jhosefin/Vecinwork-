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

import com.vecinwork.proyecto_integrador.model.Solicitud;
import com.vecinwork.proyecto_integrador.service.SolicitudService;

@RestController
@CrossOrigin("*")
public class SolicitudController {
    
        private SolicitudService solicitudService;
    
        public SolicitudController(@Autowired SolicitudService solicitudService) {
            this.solicitudService = solicitudService;
    
        }
    
    
        @PostMapping("/solicitud/save")
        public void guardarSolicitud(@RequestBody Solicitud solicitud){
            solicitudService.saveSolicitud(solicitud);
        }
    
        @PutMapping("/solicitud/update")
        public void actualizarSolicitud(@RequestBody Solicitud solicitud){
            solicitudService.updateSolicitud(solicitud);
        }

        @GetMapping("/Solicitud/findAll")
        public List<Solicitud> todasLasSolicitud(){
            return solicitudService.findAll();
        } 
    
        @GetMapping("/Solicitud/deleteSolicitud/{id}")
        public void deleteSolicitud(@PathVariable Integer id){
    
            solicitudService.eliminarSolicitud(id);
        }
        
    }