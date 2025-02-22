package com.example.CompetenciApp.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.CompetenciApp.Model.*;
import com.example.CompetenciApp.Repository.*;
import com.example.CompetenciApp.Service.UsuarioService;

@CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    @Autowired
    private RolRepository rolRepository;

    @PostMapping("/registrar")
    public ResponseEntity<Usuario> registrarUsuario(@RequestBody Map<String, Object> usuarioData) {
        String nombre = (String) usuarioData.get("nombre");
        String email = (String) usuarioData.get("email");
        String contacto = (String) usuarioData.get("contacto");
        String contrasenha = (String) usuarioData.get("contrasenha");


        List<String> nombresRoles = (List<String>) usuarioData.getOrDefault("roles", List.of());

        List<Rol> roles = nombresRoles.stream()
                .map(nombreRol -> {
                    // Busca el rol por nombre
                    Rol rol = rolRepository.findByNombre(nombreRol);
                    if (rol == null) {
                        // Si el rol no existe, créalo
                        rol = new Rol();
                        rol.setNombre(nombreRol);
                        rol = rolRepository.save(rol); // Guarda el nuevo rol en la base de datos
                    }
                    return rol;
                })
                .collect(Collectors.toList());

        Usuario usuario = new Usuario();
        usuario.setNombre(nombre);
        usuario.setEmail(email);
        usuario.setContacto(contacto);
        usuario.setContrasenha(contrasenha);
        usuario.setRoles(roles);

        Usuario nuevoUsuario = usuarioService.registrarUsuario(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> iniciarSesion(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String contrasenha = credentials.get("contrasenha");

        Optional<Usuario> usuarioOpt = usuarioService.iniciarSesion(email, contrasenha);

        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("usuario", usuario);
            return ResponseEntity.ok(response);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Credenciales incorrectas");
            return ResponseEntity.status(401).body(response);
        }
    }

    @PutMapping("/{id}/modificar")
    public ResponseEntity<Usuario> modificarPerfil(@PathVariable Long id, @RequestBody Usuario usuario) {
        Usuario actualizado = usuarioService.modificarPerfil(id, usuario);
        return ResponseEntity.ok(actualizado);
    }

    @PostMapping("/{id}/recurso")
    public ResponseEntity<Usuario> añadirRecurso(@PathVariable Long id, @RequestBody Recurso recurso) {
        Usuario usuario = usuarioService.anhadirRecursoOEntidad(id, recurso);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Usuario>> buscarPorPalabraClave(@RequestParam String palabraClave) {
        List<Usuario> resultados = usuarioService.buscarPorPalabraClave(palabraClave);
        return ResponseEntity.ok(resultados);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> verPerfil(@PathVariable Long id) {
        Usuario usuario = usuarioService.verPerfil(id);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/filtrar")
    public ResponseEntity<List<Usuario>> filtrarUsuarios(
            @RequestParam(required = false) String rol,
            @RequestParam(required = false) String tecnologia,
            @RequestParam(required = false) String curso) {
        List<Usuario> filtrados = usuarioService.filtrarUsuarios(rol, tecnologia, curso);
        return ResponseEntity.ok(filtrados);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> obtenerTodos() {
        return ResponseEntity.ok(usuarioService.obtenerTodos());
    }
}