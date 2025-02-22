package com.example.CompetenciApp.Service;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class OllamaService {

    private final String OLLAMA_API_URL = "http://localhost:11434/api/generate";

    public String enviarMensaje(String prompt) {
        RestTemplate restTemplate = new RestTemplate();

        // Crear el cuerpo de la petición
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "llama2");  // Nombre del modelo cargado en Ollama
        requestBody.put("prompt", prompt);   // El mensaje del usuario
        requestBody.put("stream", false);    // Para obtener la respuesta completa

        // Encabezados
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Crear la solicitud HTTP
        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

        try {
            // Hacer la petición POST
            ResponseEntity<Map> response = restTemplate.postForEntity(OLLAMA_API_URL, request, Map.class);

            if (response.getStatusCode() == HttpStatus.OK) {
                Map<String, Object> responseBody = response.getBody();
                return responseBody != null ? (String) responseBody.get("response") : "Respuesta vacía";
            } else {
                return "Error en la respuesta de Ollama: " + response.getStatusCode();
            }
        } catch (Exception e) {
            return "Error al conectar con Ollama: " + e.getMessage();
        }
    }
}
