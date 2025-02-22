package com.example.CompetenciApp.Model;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "recursos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recurso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String tipo;
    private String descripcion;

    public String getTipo(){
        return tipo;
    }

    public Recurso(String nombre, String tipo, String descripcion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
    
}
