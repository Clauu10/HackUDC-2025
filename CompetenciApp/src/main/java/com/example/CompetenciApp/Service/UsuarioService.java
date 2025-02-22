package com.example.CompetenciApp.Service;

import com.example.CompetenciApp.Model.Curso;
import com.example.CompetenciApp.Model.Recurso;
import com.example.CompetenciApp.Model.Rol;
import com.example.CompetenciApp.Model.Tecnologia;
import com.example.CompetenciApp.Model.Usuario;
import com.example.CompetenciApp.Repository.*;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final RecursoRepository recursoRepository;
    private final TecnologiaRepository tecnologiaRepository;
    private final RolRepository rolRepository;
    private final CursoRepository cursoRepository;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository,
                          RecursoRepository recursoRepository,
                          TecnologiaRepository tecnologiaRepository,
                          RolRepository rolRepository,
                          CursoRepository cursoRepository) {
        this.usuarioRepository = usuarioRepository;
        this.recursoRepository = recursoRepository;
        this.tecnologiaRepository = tecnologiaRepository;
        this.rolRepository = rolRepository;
        this.cursoRepository = cursoRepository;
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
            // ✅ Actualizar datos básicos
            usuario.setNombre(nuevoPerfil.getNombre());
            usuario.setEmail(nuevoPerfil.getEmail());
            usuario.setContacto(nuevoPerfil.getContacto());
            usuario.setContrasenha(nuevoPerfil.getContrasenha());

            // ✅ Actualizar roles
            if (nuevoPerfil.getRoles() != null) {
                usuario.getRoles().clear();
                nuevoPerfil.getRoles().forEach(rol -> {
                    Rol rolExistente = rolRepository.findByNombre(rol.getNombre());
                    if (rolExistente != null) {
                        usuario.getRoles().add(rolExistente);
                    } else {
                        usuario.getRoles().add(rolRepository.save(rol));
                    }
                });
            }

            // ✅ Actualizar tecnologías
            if (nuevoPerfil.getTecnologias() != null) {
                usuario.getTecnologias().clear();
                nuevoPerfil.getTecnologias().forEach(tec -> {
                    Tecnologia tecExistente = tecnologiaRepository.findByNombre(tec.getNombre());
                    if (tecExistente != null) {
                        usuario.getTecnologias().add(tecExistente);
                    } else {
                        usuario.getTecnologias().add(tecnologiaRepository.save(tec));
                    }
                });
            }

            // ✅ Actualizar cursos
            if (nuevoPerfil.getCursos() != null) {
                usuario.getCursos().clear();
                nuevoPerfil.getCursos().forEach(cur -> {
                    Curso cursoExistente = cursoRepository.findByNombre(cur.getNombre());
                    if (cursoExistente != null) {
                        usuario.getCursos().add(cursoExistente);
                    } else {
                        usuario.getCursos().add(cursoRepository.save(cur));
                    }
                });
            }

            // ✅ Actualizar recursos
            if (nuevoPerfil.getRecursos() != null) {
                usuario.getRecursos().clear();
                nuevoPerfil.getRecursos().forEach(rec -> {
                    usuario.getRecursos().add(recursoRepository.save(rec));
                });
            }

            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }


    // 4️⃣ Añadir recurso a un usuario
    /*public Usuario añadirRecurso(Long usuarioId, Recurso recurso) {
        return usuarioRepository.findById(usuarioId).map(usuario -> {
            // ✅ Guardar el recurso primero
            Recurso recursoGuardado = recursoRepository.save(recurso);

            // Añadir recurso guardado al usuario
            usuario.getRecursos().add(recursoGuardado);

            // ✅ Guardar el usuario con el recurso asociado
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }*/

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
