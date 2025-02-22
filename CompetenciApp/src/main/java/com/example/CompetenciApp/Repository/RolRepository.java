package com.example.CompetenciApp.Repository;

import com.example.CompetenciApp.Model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol, Long> {
    Rol findByNombre(String nombre);
}
