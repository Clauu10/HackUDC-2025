package com.example.CompetenciApp.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tecnologias")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tecnologia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String tipo;
    private String descripcion;

    public Tecnologia(String nombre, String tipo, String descripcion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }

    // ✅ Si no tienes Lombok funcionando, añade el getter:
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo(){
        return tipo;
    }
}
