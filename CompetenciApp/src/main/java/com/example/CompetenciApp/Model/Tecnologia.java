package com.example.CompetenciApp.Model;

import lombok.*;
import jakarta.persistence.*;

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
}
