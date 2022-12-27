package com.vecinwork.proyecto_integrador.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;




@Entity(name = "solicitud")
public class Solicitud {
    @Id
    @GeneratedValue

    private int solicitud_id;
    private Boolean aceptada;
    private Date fecha;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "publicacion_id")
    
    private Publicacion publicacion;


    public Solicitud() {
    }

    public Solicitud(int solicitud_id, Boolean aceptada, Date fecha, Publicacion publicacion, Usuario usuario) {
        this.solicitud_id = solicitud_id;
        this.aceptada = aceptada;
        this.fecha = fecha;
        this.publicacion = publicacion;
    }

    public int getSolicitud_id() {
        return solicitud_id;
    }

    public void setSolicitud_id(int solicitud_id) {
        this.solicitud_id = solicitud_id;
    }

    public Boolean getAceptada() {
        return aceptada;
    }

    public void setAceptada(Boolean aceptada) {
        this.aceptada = aceptada;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Publicacion getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(Publicacion publicacion) {
        this.publicacion = publicacion;
    }

    
}

