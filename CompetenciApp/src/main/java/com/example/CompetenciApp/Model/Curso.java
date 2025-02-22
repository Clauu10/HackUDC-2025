package com.example.CompetenciApp.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cursos")
@Data // Usa Lombok si está habilitado
@NoArgsConstructor
@AllArgsConstructor
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    // ✅ Si Lombok no funciona, agrega manualmente los getters y setters:
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
