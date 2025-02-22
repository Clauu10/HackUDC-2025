// script.js

// Definimos el contenido de cada "página" como strings
const pages = {
    login: `
        <div id="login" class="login">
            <h1>CompetenciApp</h1>
            <div class="login-container">
                <h2>Iniciar Sesión</h2>
                <form id="loginForm">
                    <div class="input-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit">Iniciar sesión</button>
                    <p id="error-message" style="color: red; display: none;">Usuario o contraseña incorrectos</p>
                </form>
            </div>
        </div>
    `,
    main: `
        <div id="main" class="home-page">
            <div class="user-menu">
                <button id="user-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User Icon">
                </button>
                <div id="dropdown-menu" class="dropdown hidden">
                    <a href="#">Editar perfil</a>
                    <a href="#" id="logout">Cerrar sesión</a>
                </div>
            </div>

            <h1>CompetenciApp</h1>
            <div id="search">
                <input type="text" id="search-bar" placeholder="Buscar..." />
                <button id="search-button">Buscar</button>
            </div>
            <div id="filters">
                <select id="tipo">
                    <option value="">Tipo</option>
                    <option value="tec">Tecnologías</option>
                    <option value="cur">Cursos</option>
                    <option value="recur">Recursos</option>
                </select>

                <select id="rol">
                    <option value="">Rol</option>
                    <option value="analyst">Analista</option>
                    <option value="chief">Jefe Proyecto</option>
                    <option value="dev">Desarrollador</option>
                    <option value="qa">QA</option>
                </select>
            </div>
        </div>
    `,
    search: `
        <div class="search-results-container">
            <h1>Resultados de búsqueda</h1>
            <p>Aquí se mostrarán los resultados de búsqueda.</p>
        </div>
    `,
    addResource: `
        <div class="add-resource-container">
            <h1>Añadir recurso</h1>
            <p>Formulario para añadir un nuevo recurso.</p>
        </div>
    `,
    stats: `
        <div class="stats-container">
            <h1>Estadísticas</h1>
            <p>Aquí se mostrarán las estadísticas.</p>
        </div>
    `,
    register:`
        <div class="register">
           <h1>CompetenciApp</h1>
            <div class="register-container">
                <h2>Registrarse</h2>
                <form id="registerForm">
                    <div class="input-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="input-group">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div class="input-group">
                        <label for="phonenumber">Teléfono:</label>
                        <input type="text" id="phonenumber" name="phonenumber" pattern="[0-9]{9}" maxlength="9" required>
                    </div>
                    <div class="input-group">
                        <label for="role">Rol:</label>
                        <select id="role">
                            <option value="analyst">Analista</option>
                            <option value="chief">Jefe Proyecto</option>
                            <option value="dev">Desarrollador</option>
                            <option value="qa">QA</option>
                        </select>
                    </div>
                    <button type="submit">Registrarse</button>
                    <p id="error-message" style="color: red; display: none;">Usuario o contraseña incorrectos</p>
                </form>
            </div>
        </div>
    `
};

// Función para cargar una página dinámicamente
function loadPage(page) {
    const app = document.getElementById('app');
    app.innerHTML = pages[page]; // Cargamos el contenido de la página

    // Añadimos los event listeners específicos de cada página
    if (page === 'login') {
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe

            // Simula una validación de inicio de sesión
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'usuario' && password === 'contraseña') {
                loadPage('main'); // Carga la página principal si el inicio de sesión es exitoso
            } else {
                document.getElementById('error-message').style.display = 'block'; // Muestra un mensaje de error
            }
        });
    } else if (page === 'main') {
        document.getElementById('user-icon').addEventListener('click', function () {
            document.getElementById('dropdown-menu').classList.toggle('show');
        });
        
        // Cerrar el menú si se hace clic fuera
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('dropdown-menu');
            const userIcon = document.getElementById('user-icon');
        
            if (!menu.contains(event.target) && !userIcon.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
        document.getElementById('search-button').addEventListener('click', function () {
            const searchTerm = document.getElementById('search-bar').value;
            const tipo = document.getElementById('tipo').value;
            const rol = document.getElementById('rol').value;

            // Aquí puedes manejar la lógica de búsqueda
            console.log("Búsqueda:", searchTerm);
            console.log("Tipo seleccionado:", tipo);
            console.log("Rol seleccionado:", rol);
        });
    }
}

// Cargamos la página de inicio de sesión por defecto al cargar la aplicación
document.addEventListener('DOMContentLoaded', function () {
    loadPage('main'); // Ahora se ejecutará cuando el DOM esté listo
});