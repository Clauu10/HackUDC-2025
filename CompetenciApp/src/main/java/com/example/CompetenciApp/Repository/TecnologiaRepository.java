package com.example.CompetenciApp.Repository;

import com.example.CompetenciApp.Model.Tecnologia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TecnologiaRepository extends JpaRepository<Tecnologia, Long> {
    Tecnologia findByNombre(String nombre);
}
