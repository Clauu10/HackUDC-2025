package com.example.CompetenciApp.Service;

import com.example.CompetenciApp.Model.*;
import com.example.CompetenciApp.Repository.*;

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

    public Usuario registrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> iniciarSesion(String email, String contrasenha) {
        return usuarioRepository.findByEmailAndContrasenha(email, contrasenha);
    }

    public Usuario modificarPerfil(Long id, Usuario nuevoPerfil) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setNombre(nuevoPerfil.getNombre());
            usuario.setEmail(nuevoPerfil.getEmail());
            usuario.setContacto(nuevoPerfil.getContacto());
            usuario.setContrasenha(nuevoPerfil.getContrasenha());

            if (nuevoPerfil.getRoles() != null) {
                usuario.getRoles().clear();
                nuevoPerfil.getRoles().forEach(rol -> {
                    Rol rolExistente = rolRepository.findByNombre(rol.getNombre());
                    usuario.getRoles().add(rolExistente != null ? rolExistente : rolRepository.save(rol));
                });
            }

            if (nuevoPerfil.getTecnologias() != null) {
                usuario.getTecnologias().clear();
                nuevoPerfil.getTecnologias().forEach(tec -> {
                    Tecnologia tecExistente = tecnologiaRepository.findByNombre(tec.getNombre());
                    usuario.getTecnologias().add(tecExistente != null ? tecExistente : tecnologiaRepository.save(tec));
                });
            }

            if (nuevoPerfil.getCursos() != null) {
                usuario.getCursos().clear();
                nuevoPerfil.getCursos().forEach(cur -> {
                    Curso cursoExistente = cursoRepository.findByNombre(cur.getNombre());
                    usuario.getCursos().add(cursoExistente != null ? cursoExistente : cursoRepository.save(cur));
                });
            }

            if (nuevoPerfil.getRecursos() != null) {
                usuario.getRecursos().clear();
                nuevoPerfil.getRecursos().forEach(rec -> {
                    usuario.getRecursos().add(recursoRepository.save(rec));
                });
            }

            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public Usuario añadirRecurso(Long usuarioId, Recurso recurso) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (recurso.getId() == null) {
            recurso = recursoRepository.save(recurso);
        } else {
            recurso = recursoRepository.findById(recurso.getId())
                    .orElseThrow(() -> new RuntimeException("Recurso no encontrado"));
        }

        usuario.getRecursos().add(recurso);
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> buscarPorPalabraClave(String palabraClave) {
        return usuarioRepository.buscarPorPalabraClave(palabraClave);
    }

    public Usuario verPerfil(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public List<Usuario> filtrarUsuarios(String rol, String tecnologia, String curso) {
        return usuarioRepository.filtrarUsuarios(rol, tecnologia, curso);
    }

    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
    }
}