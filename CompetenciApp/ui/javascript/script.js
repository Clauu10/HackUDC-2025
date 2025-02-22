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
                        <label for="contrasenha">Contraseña:</label>
                        <input type="password" id="contrasenha" name="contrasenha" required>
                    </div>
                    <button type="submit">Iniciar sesión</button>
                    <p id="error-message" style="color: red; display: none;">Usuario o contraseña incorrectos</p>
                </form>
            </div>
        </div>
    `,
    main: `
        <div id="body-main">
            <div id="main" class="home-page">
                <!-- Icono de usuario con menú -->
                <div class="user-menu">
                    <button id="user-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User Icon">
                    </button>
                    <div id="dropdown-menu" class="dropdown hidden">
                        <a href="#">Editar perfil</a>
                        <a href="#" id="logout">Cerrar sesión</a>
                    </div>
                </div>

                <!-- Menú hamburguesa -->
                <div id="hamburger-menu" class="hamburger-menu">
                    <button id="hamburger-icon">
                        <img src="CompetenciApp/ui/img/menu_24dp_AC3931.png" alt="Menu" width="30" height="30">
                    </button>
                    <div id="dropdown-hamburger-menu" class="dropdown hidden">
                        <a href="#">Inicio</a>
                        <a href="#">Añadir Recurso</a>
                        <a href="#">Estadísticas</a>
                    </div>
                </div>


                <h1 class="title">CompetenciApp</h1>

                <!-- Barra de búsqueda -->
                <div id="search-main">
                    <input type="text" id="search-bar-main" placeholder="Buscar..." />
                    <button id="search-button-main">Buscar</button>
                </div>

                <!-- Filtros -->
                <div id="filters">
                    <div class="filter-group">
                        <label for="tipo">Tipo:</label>
                        <select id="tipo">
                            <option value="">Selecciona</option>
                            <option value="tec">Tecnologías</option>
                            <option value="cur">Cursos</option>
                            <option value="recur">Recursos</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="rol">Rol:</label>
                        <select id="rol">
                            <option value="">Selecciona</option>
                            <option value="analyst">Analista</option>
                            <option value="chief">Jefe Proyecto</option>
                            <option value="dev">Desarrollador</option>
                            <option value="qa">QA</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    `,
    search: `
        <div class="search-results-container">
            <h1 class="title">CompetenciApp</h1>
            <div id="search-and-filters" class="search-and-filter">
                <div id="search" class="search-container">
                    <input type="text" id="search-bar" placeholder="Buscar..." />
                    <button id="search-button">Buscar</button>
                </div>

                <!-- Filtros de búsqueda -->
                <div id="filters-search" class="filters-search-container">
                    <div class="filter-search">
                        <select id="tipo">
                            <option value="">Tipo</option>
                            <option value="tec">Tecnologías</option>
                            <option value="cur">Cursos</option>
                            <option value="recur">Recursos</option>
                        </select>
                    </div>
                    <div class="filter-search">
                        <select id="rol">
                            <option value="">Rol</option>
                            <option value="analyst">Analista</option>
                            <option value="chief">Jefe Proyecto</option>
                            <option value="dev">Desarrollador</option>
                            <option value="qa">QA</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <hr class="separator-line">

            <div id="search-results">
                <h1>Resultados de búsqueda</h1>
                <p>Aquí se mostrarán los resultados de búsqueda.</p>
            </div>
        </div>

    `,
    addResource: `
        <div id="body-main">
            <div id="login" class="login">
                <h1>CompetenciApp</h1>
                <div class="login-container">
                    <h2>Nuevo Recurso</h2>
                    <form id="loginForm">
                        <div class="input-group">
                            <label for="tipo">Tipo:</label>
                            <select id="tipo">
                                <option value="">Selecciona un tipo</option>
                                <option value="tec">Tecnologías</option>
                                <option value="cur">Cursos</option>
                                <option value="recur">Recursos</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="name">Nombre:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="input-group">
                            <label for="desc">Descripción:</label>
                            <textarea placeholder="Introduce una descripción" row="3" cols="30" name="desc" id="desc" class="input-text"></textarea>
                        </div>
                        <button type="submit">Añadir</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    register:`
        <div id="body-main">
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
            const email = document.getElementById('email').value;
            const contrasenha = document.getElementById('contrasenha').value;

            fetch('http://localhost:8080/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, contrasenha }) // Envía 'contrasenha' al backend
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Credenciales incorrectas');
                }
                return response.json();
            })
            .then(data => {
                console.log('Respuesta del backend:', data); // Imprime la respuesta
                if (data.success) { // Verifica si el inicio de sesión fue exitoso
                    loadPage("main"); // Si el login es exitoso, carga la página principal
                } else {
                    const errorMessage = document.getElementById('error-message');
                    if (errorMessage) {
                        errorMessage.style.display = 'block'; // Muestra mensaje de error
                    }
                }
            })
            .catch(error => {
                console.error('Error de conexión:', error);
                const errorMessage = document.getElementById('error-message');
                if (errorMessage) {
                    errorMessage.style.display = 'block'; // Muestra mensaje de error
                } else {
                    console.error('No se encontró el elemento con id="error-message"');
                }
            });
        });
    } else if (page === 'main') {
        document.getElementById('hamburger-icon').addEventListener('click', function () {
            document.getElementById('dropdown-hamburger-menu').classList.toggle('show');
        });
        
        // Cerrar el menú si se hace clic fuera del menú
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('dropdown-hamburger-menu');
            const hamburgerIcon = document.getElementById('hamburger-icon');
        
            if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
        

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
    } else if(page == 'search') {
        document.getElementById('search-button').addEventListener('click', function () {
            const searchTerm = document.getElementById('search-bar').value;
            const tipo = document.getElementById('tipo').value;
            const rol = document.getElementById('rol').value;

            // Aquí puedes manejar la lógica de búsqueda
            console.log("Búsqueda:", searchTerm);
            console.log("Tipo seleccionado:", tipo);
            console.log("Rol seleccionado:", rol);

            // Aquí es donde puedes mostrar los resultados de la búsqueda
            document.getElementById('search-results').innerHTML = `
                <h1>Resultados de búsqueda</h1>
                <p>Mostrando resultados para: <strong>${searchTerm}</strong></p>
                <p>Tipo: ${tipo}, Rol: ${rol}</p>
                <!-- Aquí se podrían agregar los resultados reales -->
            `;
        });
    }
}

// Cargamos la página de inicio de sesión por defecto al cargar la aplicación
document.addEventListener('DOMContentLoaded', function () {
    loadPage('login'); // Ahora se ejecutará cuando el DOM esté listo
});