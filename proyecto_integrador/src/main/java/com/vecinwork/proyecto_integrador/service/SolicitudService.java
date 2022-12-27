package com.vecinwork.proyecto_integrador.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.vecinwork.proyecto_integrador.model.Solicitud;
import com.vecinwork.proyecto_integrador.repository.SolicitudRepository;

@Service
@Transactional
public class SolicitudService {

    private SolicitudRepository solicitudRepository;

    public SolicitudService(SolicitudRepository solicitudRepository){
        this.solicitudRepository = solicitudRepository;
    }

    public void saveSolicitud(Solicitud solicitud){
        solicitudRepository.save(solicitud); 
    }

    public void updateSolicitud(Solicitud solicitud){
        solicitudRepository.save(solicitud);
    }

    public List<Solicitud> findAll(){
        return solicitudRepository.findAll();
    }

    public void eliminarSolicitud(Integer id){
        solicitudRepository.deleteById(id);
    }

    
}
