package com.example.CompetenciApp.Model;

import lombok.*;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String email;
    private String contacto;
    private String contrasenha;

    @ManyToMany
    @JoinTable(
            name = "usuario_rol",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "rol_id")
    )
    private List<com.example.CompetenciApp.Model.Rol> roles;

    @ManyToMany
    @JoinTable(
            name = "usuario_tecnologia",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "tecnologia_id")
    )
    private List<com.example.CompetenciApp.Model.Tecnologia> tecnologias;

    @ManyToMany
    @JoinTable(
            name = "usuario_curso",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "curso_id")
    )
    private List<com.example.CompetenciApp.Model.Curso> cursos;

    @ManyToMany
    @JoinTable(
            name = "usuario_recurso",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "recurso_id")
    )
    private List<com.example.CompetenciApp.Model.Recurso> recursos;
}
