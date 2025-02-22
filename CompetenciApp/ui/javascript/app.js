const chatWindow = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Función para añadir mensajes al chat
function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Función para enviar el mensaje al backend
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Mostrar el mensaje del usuario
    appendMessage(message, 'user');
    userInput.value = '';

    try {
        // Enviar el mensaje al backend
        const response = await fetch('http://localhost:8080/chatbot/preguntar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mensaje: message })
        });

        if (!response.ok) throw new Error(`Error ${response.status}`);

        const data = await response.text(); // Si el backend responde en texto plano
        appendMessage(data, 'bot');
    } catch (error) {
        appendMessage("⚠️ Error al comunicarse con el chatbot.", 'bot');
        console.error("Error:", error);
    }
}

// Enviar con Enter
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
});
