package com.vecinwork.proyecto_integrador.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity(name="servicios")

public class Servicios {
    @Id
    @GeneratedValue
    private Integer servicios_id;
    private String tipoDeServicio;
    private String Descripccion;

    @OneToMany(mappedBy = "servicios", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Publicacion> publicacion;

    public Servicios() {
    }
    public Servicios(Integer servicios_id, String tipoDeServicio, String descripccion, List<Publicacion> publicacion) {
        this.servicios_id = servicios_id;
        this.tipoDeServicio = tipoDeServicio;
        Descripccion = descripccion;
        this.publicacion = publicacion;
    }
    public Integer getServicios_id() {
        return servicios_id;
    }
    public void setServicios_id(Integer servicios_id) {
        this.servicios_id = servicios_id;
    }
    public String getTipoDeServicio() {
        return tipoDeServicio;
    }
    public void setTipoDeServicio(String tipoDeServicio) {
        this.tipoDeServicio = tipoDeServicio;
    }
    public String getDescripccion() {
        return Descripccion;
    }
    public void setDescripccion(String descripccion) {
        Descripccion = descripccion;
    }
    public List<Publicacion> getPublicacion() {
        return publicacion;
    }
    public void setPublicacion(List<Publicacion> publicacion) {
        this.publicacion = publicacion;
    }



    


        
    }

