package com.example.CompetenciApp.Controller;

import com.example.CompetenciApp.Model.Recurso;
import com.example.CompetenciApp.Model.Usuario;
import com.example.CompetenciApp.Service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;
    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    // 1️⃣ Registrar usuario
    @PostMapping("/registrar")
    public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioService.registrarUsuario(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }

    // 2️⃣ Iniciar sesión
    @PostMapping("/login")
    public ResponseEntity<Usuario> iniciarSesion(@RequestParam String email, @RequestParam String contrasenha) {
        Optional<Usuario> usuario = usuarioService.iniciarSesion(email, contrasenha);
        return usuario.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(401).build());
    }

    // 3️⃣ Modificar perfil de usuario
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> modificarPerfil(@PathVariable Long id, @RequestBody Usuario usuario) {
        Usuario actualizado = usuarioService.modificarPerfil(id, usuario);
        return ResponseEntity.ok(actualizado);
    }

    // 4️⃣ Añadir recurso a un usuario
    @PostMapping("/{id}/recurso")
    public ResponseEntity<Usuario> añadirRecurso(@PathVariable Long id, @RequestBody Recurso recurso) {
        Usuario actualizado = usuarioService.añadirRecurso(id, recurso);
        return ResponseEntity.ok(actualizado);
    }

    // 5️⃣ Buscar por palabra clave
    @GetMapping("/buscar")
    public ResponseEntity<List<Usuario>> buscarPorPalabraClave(@RequestParam String palabraClave) {
        List<Usuario> resultados = usuarioService.buscarPorPalabraClave(palabraClave);
        return ResponseEntity.ok(resultados);
    }

    // 6️⃣ Ver perfil de usuario
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> verPerfil(@PathVariable Long id) {
        Usuario usuario = usuarioService.verPerfil(id);
        return ResponseEntity.ok(usuario);
    }

    // 7️⃣ Filtrar resultados de búsqueda
    @GetMapping("/filtrar")
    public ResponseEntity<List<Usuario>> filtrarUsuarios(
            @RequestParam(required = false) String rol,
            @RequestParam(required = false) String tecnologia,
            @RequestParam(required = false) String curso) {
        List<Usuario> filtrados = usuarioService.filtrarUsuarios(rol, tecnologia, curso);
        return ResponseEntity.ok(filtrados);
    }

    // Extra: Obtener todos los usuarios
    @GetMapping
    public ResponseEntity<List<Usuario>> obtenerTodos() {
        return ResponseEntity.ok(usuarioService.obtenerTodos());
    }
}
