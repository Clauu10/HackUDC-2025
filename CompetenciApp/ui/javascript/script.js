// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtén los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí podrías conectar con tu base de datos o API, pero para este ejemplo usaremos valores fijos
    const validUsername = "usuario";
    const validPassword = "contraseña123";

    // Compara los valores
    if (username === validUsername && password === validPassword) {
        // Redirigir o mostrar mensaje de éxito
        alert('Bienvenido!');
        // Aquí podrías redirigir a la página principal o a otro lugar
    } else {
        // Mostrar mensaje de error
        document.getElementById('error-message').style.display = 'block';
    }
});