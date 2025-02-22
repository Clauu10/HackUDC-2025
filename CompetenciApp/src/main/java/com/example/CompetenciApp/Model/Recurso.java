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

    private String tipo;
    private String link;
    private String descripcion;
}
