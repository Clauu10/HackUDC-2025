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
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public Usuario anhadirRecursoOEntidad(Long usuarioId, Recurso recurso) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        String tipo = recurso.getTipo();

        switch (tipo.toLowerCase()) {
            case "curso":
                Curso curso = new Curso(recurso.getNombre(), recurso.getTipo(), recurso.getDescripcion());
                cursoRepository.save(curso);
                usuario.getCursos().add(curso);
                break;

            case "tecnologia":
                Tecnologia tecnologia = new Tecnologia(recurso.getNombre(), recurso.getTipo(), recurso.getDescripcion());
                tecnologiaRepository.save(tecnologia);
                usuario.getTecnologias().add(tecnologia);
                break;

            case "recurso":
                recursoRepository.save(recurso);
                usuario.getRecursos().add(recurso);
                break;

            default:
                throw new RuntimeException("Tipo de recurso no válido: " + tipo);
        }

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