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

    // ✅ Si no tienes Lombok funcionando, añade el getter:
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
