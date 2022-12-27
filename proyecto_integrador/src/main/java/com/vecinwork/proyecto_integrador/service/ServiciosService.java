package com.vecinwork.proyecto_integrador.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.vecinwork.proyecto_integrador.model.Servicios;
import com.vecinwork.proyecto_integrador.repository.ServiciosRepository;

@Service
@Transactional
public class ServiciosService {

    private ServiciosRepository serviciosRepository;

    public ServiciosService(ServiciosRepository serviciosRepository){
        this.serviciosRepository = serviciosRepository;
    }

    public void saveServicios (Servicios servicios){
        serviciosRepository.save(servicios);
    }

    public void updateServicios(Servicios servicios){
        serviciosRepository.save(servicios);
    }

    public List<Servicios> findAll(){
        return serviciosRepository.findAll();
    } 

    public void eliminarServicios(Integer id){
        serviciosRepository.deleteById(id);
    }

    
}
