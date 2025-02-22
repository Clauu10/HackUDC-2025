package com.example.CompetenciApp.Service;

import com.example.CompetenciApp.Model.Curso;
import com.example.CompetenciApp.Model.Recurso;
import com.example.CompetenciApp.Model.Rol;
import com.example.CompetenciApp.Model.Tecnologia;
import com.example.CompetenciApp.Model.Usuario;
import com.example.CompetenciApp.Repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    // 1️⃣ Registrar usuario
    public Usuario registrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // 2️⃣ Iniciar sesión (básico sin seguridad avanzada)
    public Optional<Usuario> iniciarSesion(String email, String contrasenha) {
        return usuarioRepository.findByEmailAndContrasenha(email, contrasenha);
    }

    // 3️⃣ Modificar perfil de usuario
    public Usuario modificarPerfil(Long id, Usuario nuevoPerfil) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setNombre(nuevoPerfil.getNombre());
            usuario.setEmail(nuevoPerfil.getEmail());
            usuario.setContacto(nuevoPerfil.getContacto());
            usuario.setContrasenha(nuevoPerfil.getContrasenha());
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    // 4️⃣ Añadir recurso a un usuario
    public Usuario añadirRecurso(Long usuarioId, Recurso recurso) {
        return usuarioRepository.findById(usuarioId).map(usuario -> {
            usuario.getRecursos().add(recurso);
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    // 5️⃣ Buscar por palabra clave (en nombre, tecnologías, cursos o roles)
    public List<Usuario> buscarPorPalabraClave(String palabraClave) {
        return usuarioRepository.buscarPorPalabraClave(palabraClave);
    }

    // 6️⃣ Ver perfil de usuario por ID
    public Usuario verPerfil(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    // 7️⃣ Filtrar resultados por tecnología, curso, recurso o rol
    public List<Usuario> filtrarUsuarios(String rol, String tecnologia, String curso) {
        return usuarioRepository.filtrarUsuarios(rol, tecnologia, curso);
    }

    // Obtener todos los usuarios
    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
    }
}
