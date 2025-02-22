package com.example.CompetenciApp.Controller;

import com.example.CompetenciApp.Model.Recurso;
import com.example.CompetenciApp.Model.Usuario;
import com.example.CompetenciApp.Service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "*", allowCredentials = "true")
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
    // 3️⃣ Modificar perfil de usuario
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> modificarPerfil(@PathVariable Long id, @RequestBody Usuario usuario) {
        Usuario actualizado = usuarioService.modificarPerfil(id, usuario);
        return ResponseEntity.ok(actualizado);
    }

    // 4️⃣ Añadir recurso a un usuario
    /*@PostMapping("/{id}/recurso")
    public ResponseEntity<Usuario> añadirRecurso(@PathVariable Long id, @RequestBody Recurso recurso) {
        Usuario actualizado = usuarioService.añadirRecurso(id, recurso);
        return ResponseEntity.ok(actualizado);
    }*/

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
