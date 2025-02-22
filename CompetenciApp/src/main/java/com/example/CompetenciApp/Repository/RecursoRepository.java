package com.example.CompetenciApp.Repository;

import com.example.CompetenciApp.Model.Recurso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecursoRepository extends JpaRepository<Recurso, Long> {
    Recurso findByTipo(String tipo);
}
