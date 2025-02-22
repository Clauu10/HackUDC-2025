package com.example.CompetenciApp.Repository;

import com.example.CompetenciApp.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Iniciar sesión
    Optional<Usuario> findByEmailAndContrasenha(String email, String contrasenha);

    // Buscar por palabra clave en nombre, tecnologías, cursos o roles
    @Query("SELECT u FROM Usuario u " +
            "LEFT JOIN u.tecnologias t " +
            "LEFT JOIN u.cursos c " +
            "LEFT JOIN u.roles r " +
            "WHERE LOWER(u.nombre) LIKE LOWER(CONCAT('%', :palabraClave, '%')) " +
            "OR LOWER(t.nombre) LIKE LOWER(CONCAT('%', :palabraClave, '%')) " +
            "OR LOWER(c.nombre) LIKE LOWER(CONCAT('%', :palabraClave, '%')) " +
            "OR LOWER(r.nombre) LIKE LOWER(CONCAT('%', :palabraClave, '%'))")
    List<Usuario> buscarPorPalabraClave(String palabraClave);

    // Filtrar por rol, tecnología o curso
    @Query("SELECT u FROM Usuario u " +
            "LEFT JOIN u.roles r " +
            "LEFT JOIN u.tecnologias t " +
            "LEFT JOIN u.cursos c " +
            "WHERE (:rol IS NULL OR r.nombre = :rol) " +
            "AND (:tecnologia IS NULL OR t.nombre = :tecnologia) " +
            "AND (:curso IS NULL OR c.nombre = :curso)")
    List<Usuario> filtrarUsuarios(String rol, String tecnologia, String curso);
}
