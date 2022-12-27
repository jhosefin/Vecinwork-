package com.vecinwork.proyecto_integrador.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vecinwork.proyecto_integrador.model.Solicitud;

public interface SolicitudRepository extends JpaRepository<Solicitud,Integer>{
    
}
