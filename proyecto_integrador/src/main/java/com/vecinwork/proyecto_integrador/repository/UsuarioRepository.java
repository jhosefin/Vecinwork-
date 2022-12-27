package com.vecinwork.proyecto_integrador.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vecinwork.proyecto_integrador.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer>{
    
    @Query(value="SELECT * FROM usuario WHERE region = ?1" ,nativeQuery=true)
    List<Usuario> findAllRegion(String region);


}
