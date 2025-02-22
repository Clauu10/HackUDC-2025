package com.example.CompetenciApp.Controller;

import com.example.CompetenciApp.Service.OllamaService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chatbot")
public class ChatbotController {

    private final OllamaService ollamaService;

    @Autowired
    public ChatbotController(OllamaService ollamaService) {
        this.ollamaService = ollamaService;
    }

    @PostMapping("/preguntar")
public ResponseEntity<String> preguntar(@RequestBody Map<String, String> mensaje) {
    String texto = mensaje.get("mensaje");
    String respuesta = ollamaService.enviarMensaje(texto);
    return ResponseEntity.ok(respuesta);
}

}
