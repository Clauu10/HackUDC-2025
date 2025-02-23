// script.js

// Definimos el contenido de cada "página" como strings
const pages = {
    login: `
        <div id="body-main">
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
                    <button id="register-button" style="margin-top: 10px;">Registrarse</button>
                </div>
            </div>
        </div>
    `,
    main: `
        <div id="body-main">
            <div id="main" class="home-page">
                <div class="user-menu">
                    <button id="user-icon">
                         <i class="fas fa-user" style="color: #ac3931; font-size: 24px;"></i>
                    </button>
                    <div id="dropdown-menu" class="dropdown hidden">
                        <a href="" id="edit">Editar perfil</a>
                        <a href="" id="logout">Cerrar sesión</a>
                    </div>
                </div>
                <div class="hamburger-menu">
                    <button id="menuIcon">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <div id="burg-dropdown-menu" class="burg-dropdown hidden">
                        <a href="" id="home">Inicio</a>
                        <a href="" id="addCompetence">Añadir Competencia</a>
                        <a href="" id="chatBot">ChatBot</a>
                    </div>
                </div>
                <h1 class="title">CompetenciApp</h1>
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
            <div class="user-menu">
                <button id="user-icon">
                     <i class="fas fa-user" style="color: #ac3931; font-size: 24px;"></i>
                </button>
                <div id="dropdown-menu" class="dropdown hidden">
                    <a href="" id="edit">Editar perfil</a>
                    <a href="" id="logout">Cerrar sesión</a>
                </div>
            </div>
            <div class="hamburger-menu">
                <button id="menuIcon">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </button>
                <div id="burg-dropdown-menu" class="burg-dropdown hidden">
                    <a href="" id="home">Inicio</a>
                    <a href="" id="addCompetence">Añadir Competencia</a>
                    <a href="" id="chatBot">ChatBot</a>
                </div>
            </div>
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
                <div class="user-menu">
                    <button id="user-icon">
                         <i class="fas fa-user" style="color: #ac3931; font-size: 24px;"></i>
                    </button>
                    <div id="dropdown-menu" class="dropdown hidden">
                        <a href="" id="edit">Editar perfil</a>
                        <a href="" id="logout">Cerrar sesión</a>
                    </div>
                </div>
                <div class="hamburger-menu">
                    <button id="menuIcon">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <div id="burg-dropdown-menu" class="burg-dropdown hidden">
                        <a href="" id="home">Inicio</a>
                        <a href="" id="addCompetence">Añadir Competencia</a>
                        <a href="" id="chatBot">ChatBot</a>
                    </div>
                </div>
                <h1>CompetenciApp</h1>
                <div class="login-container">
                    <h2>Nueva Competencia</h2>
                    <form id="addResourceForm">
                        <div class="input-group">
                            <label for="tipo">Tipo:</label>
                            <select id="tipo" name="tipo" required>
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
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required>
                        </div>
                        <div class="input-group">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required>
                        </dsiv>
                        <div class="input-group">
                            <label for="contrasenha">Contraseña:</label>
                            <input type="password" id="contrasenha" name="contrasenha" required>
                        </div>
                        <div class="input-group">
                            <label for="contacto">Teléfono:</label>
                            <input type="text" id="contacto" name="contacto" pattern="[0-9]{9}" maxlength="9" required>
                        </div>
                        <div class="input-group">
                              <label for="roles">Roles:</label>
                                <div>
                                    <input type="checkbox" id="analyst" name="roles" value="analyst">
                                    <label for="analyst">Analista</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="chief" name="roles" value="chief">
                                    <label for="chief">Jefe Proyecto</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="dev" name="roles" value="dev">
                                    <label for="dev">Desarrollador</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="qa" name="roles" value="qa">
                                    <label for="qa">QA</label>
                                </div>
                        </div>
                        <button type="submit">Registrarse</button>
                        <p id="error-message" style="color: red; display: none;">Error al registrar el usuario</p>
                    </form>
                </div>
            </div>
        </div>
    `,
    editProfile: `
        <div id="body-main">
            <div class="edit-profile">
                 <div class="user-menu">
                    <button id="user-icon">
                         <i class="fas fa-user" style="color: #ac3931; font-size: 24px;"></i>
                    </button>
                    <div id="dropdown-menu" class="dropdown hidden">
                        <a href="" id="edit">Editar perfil</a>
                        <a href="" id="logout">Cerrar sesión</a>
                    </div>
                </div>
                <div class="hamburger-menu">
                    <button id="menuIcon">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <div id="burg-dropdown-menu" class="burg-dropdown hidden">
                        <a href="" id="home">Inicio</a>
                        <a href="" id="addCompetence">Añadir Competencia</a>
                        <a href="" id="chatBot">ChatBot</a>
                    </div>
                </div>
                <h1>CompetenciApp</h1>
                <div class="edit-profile-container">
                    <h2>Editar Perfil</h2>
                    <form id="editProfileForm">
                        <div class="input-group">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required value="{nombre}">
                        </div>
                        <div class="input-group">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required value="{email}">
                        </div>
                        <div class="input-group">
                            <label for="contacto">Teléfono:</label>
                            <input type="text" id="contacto" name="contacto" pattern="[0-9]{9}" maxlength="9" required value="{contacto}">
                        </div>
                        <div class="input-group">
                            <label for="contrasenha">Contraseña:</label>
                            <input type="password" id="contrasenha" name="contrasenha" required value="{contrasenha}">
                        </div>
                        <div class="input-group">
                            <label for="roles">Rol:</label>
                            <select id="roles">
                                <option value="analyst" {analyst}>Analista</option>
                                <option value="chief" {chief}>Jefe Proyecto</option>
                                <option value="dev" {dev}>Desarrollador</option>
                                <option value="qa" {qa}>QA</option>
                            </select>
                        </div>
                        <button type="submit">Actualizar Perfil</button>
                        <p id="error-message" style="color: red; display: none;">Error al actualizar el perfil</p>
                    </form>
                </div>
            </div>
        </div>
    `,
    chat: `
        <div class="page">
            <div class="chat-container">
                <div class="header">Chatbot IA 🤖</div>
                
                <div id="chat-window">
                    <div id="chat-messages"></div>
                </div>
        
                <div class="input-container">
                    <input type="text" id="user-input" placeholder="Escribe tu mensaje..." autofocus>
                    <button id="enviar" onclick="sendMessage()">Enviar</button>
                    <script src="/CompetenciApp/ui/javascript/app.js"></script>
                </div>
            </div>
        
            <div class="volver-button">
                <button id="volver">Volver</button>
            </div>
        </div>
    `
};
function mostrarResultadosBusqueda(data, palabraClave, page = 1, itemsPerPage = 5) {
    const app = document.getElementById('app');
    let resultadosHTML = `
        <div class="search-results-container">
            <div class="user-menu">
                <button id="user-icon">
                    <i class="fas fa-user" style="color: #ac3931; font-size: 24px;"></i>
                </button>
                <div id="dropdown-menu" class="dropdown hidden">
                    <a href="" id="edit">Editar perfil</a>
                    <a href="" id="logout">Cerrar sesión</a>
                </div>
            </div>
            <div class="hamburger-menu">
                <button id="menuIcon">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </button>
                <div id="burg-dropdown-menu" class="burg-dropdown hidden">
                    <a href="" id="home">Inicio</a>
                    <a href="" id="addCompetence">Añadir Competencia</a>
                    <a href="" id="chatBot">ChatBot</a>
                </div>
            </div>
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
                <h1>Resultados de búsqueda para: "${palabraClave}"</h1>
    `;

    if (data.length === 0) {
        resultadosHTML += `<p>No se encontraron resultados para "${palabraClave}".</p>`;
    } else {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = data.slice(start, end);

        resultadosHTML += `<ul class="resultados-lista">`;
        paginatedData.forEach(usuario => {
            resultadosHTML += `
                <li>
                    <strong>Nombre:</strong> ${usuario.nombre} <br>
                    <strong>Email:</strong> ${usuario.email} <br>
                    <strong>Contacto:</strong> ${usuario.contacto || 'N/A'} <br>
                    <strong>Recursos:</strong> ${usuario.recursos.map(recurso => recurso.nombre).join(', ') || 'Sin recursos'} <br>
                    <strong>Roles:</strong> ${usuario.roles.map(rol => rol.nombre).join(', ') || 'Sin rol'} <br>
                </li><hr>
            `;
        });
        resultadosHTML += `</ul>`;

        // Paginación
        const totalPages = Math.ceil(data.length / itemsPerPage);
        resultadosHTML += `<div class="pagination">`;
        for (let i = 1; i <= totalPages; i++) {
            resultadosHTML += `<button class="${i === page ? 'active' : ''}" onclick="mostrarResultadosBusqueda(data, '${palabraClave}', ${i}, ${itemsPerPage})">${i}</button>`;
        }
        resultadosHTML += `</div>`;
    }

    resultadosHTML += `
        <div class="volver-button">
            <button id="volver">Volver</button>
        </div> `;

    app.innerHTML = resultadosHTML;

    document.getElementById('volver').addEventListener('click', function () {
        loadPage('main');
    });
    
    configurarMenus();
    configurarBusquedaManual();
}

function configurarBusquedaManual() {
    document.getElementById('search-button').addEventListener('click', function () {
        const searchTerm = document.getElementById('search-bar').value;
        const tipo = document.getElementById('tipo').value;
        const rol = document.getElementById('rol').value;

        fetch(`http://localhost:8080/usuarios/buscar?palabraClave=${searchTerm}&tipo=${tipo}&rol=${rol}`)
            .then(response => response.json())
            .then(data => {
                mostrarResultadosBusqueda(data, searchTerm); // Muestra los resultados
            })
            .catch(error => {
                console.error('Error en la búsqueda:', error);
            });
    });
}

function configurarMenus() {
    // Menú de usuario (icono de usuario)
    document.getElementById('user-icon').addEventListener('click', function () {
        document.getElementById('dropdown-menu').classList.toggle('show');
    });

    // Cerrar el menú de usuario si se hace clic fuera
    document.addEventListener('click', function (event) {
        const menu = document.getElementById('dropdown-menu');
        const userIcon = document.getElementById('user-icon');

        if (!menu.contains(event.target) && !userIcon.contains(event.target)) {
            menu.classList.remove('show');
        }
    });

    // Menú hamburguesa
    document.getElementById('menuIcon').addEventListener('click', function () {
        const hamburgerMenu = document.getElementById('burg-dropdown-menu');
        hamburgerMenu.classList.toggle('show');
        this.classList.toggle('active');
    });

    // Cerrar el menú hamburguesa si se hace clic fuera
    document.addEventListener('click', function (event) {
        const hamburgerMenu = document.getElementById('burg-dropdown-menu');
        const menuIcon = document.getElementById('menuIcon');

        if (!hamburgerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            hamburgerMenu.classList.remove('show');
            menuIcon.classList.remove('active');
        }
    });

    // Eventos para los enlaces del menú de usuario
    document.getElementById('edit').addEventListener('click', function (event) {
        event.preventDefault();
        loadPage('editProfile');
    });

    document.getElementById('logout').addEventListener('click', function (event) {
        event.preventDefault();
        loadPage('login');
    });

    // Eventos para los enlaces del menú hamburguesa
    document.getElementById('home').addEventListener('click', function (event) {
        event.preventDefault();
        loadPage('main');
    });

    document.getElementById('addCompetence').addEventListener('click', function (event) {
        event.preventDefault();
        loadPage('addResource');
    });

    document.getElementById('chatBot').addEventListener('click', function (event) {
        event.preventDefault();
        loadPage('chat');
    });
}

function obtenerUserId() {
    return localStorage.getItem('userId'); // Retorna el ID del usuario
}

// Función para cargar una página dinámicamente
function loadPage(page) {
    const app = document.getElementById('app');
    app.innerHTML = pages[page]; // Cargamos el contenido de la página

    if(page =='chat'){
        window.appendMessage = function(message, sender) {
            const chatWindow = document.getElementById('chat-messages');
            if (!chatWindow) {
                console.error('El contenedor de mensajes no fue encontrado.');
                return;
            }

            const messageDiv = document.createElement('div');
            messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
            messageDiv.textContent = message;
            chatWindow.appendChild(messageDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        };

        window.sendMessage = async function() {
            const userInput = document.getElementById('user-input');
            if (!userInput) {
                console.error('El input del usuario no fue encontrado.');
                return;
            }

            const message = userInput.value.trim();
            if (!message) return;

            appendMessage(message, 'user');
            userInput.value = '';

            try {
                const response = await fetch('http://localhost:8080/chatbot/preguntar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ mensaje: message })
                });

                if (!response.ok) throw new Error(`Error ${response.status}`);

                const data = await response.text();
                appendMessage(data, 'bot');
            } catch (error) {
                appendMessage("⚠️ Error al comunicarse con el chatbot.", 'bot');
                console.error("Error:", error);
            }
        };

        // Vincular el botón de volver
        document.getElementById('volver').addEventListener('click', function () {
            loadPage('main');
        });

    }else if (page === 'login') {
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
                body: JSON.stringify({ email, contrasenha })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Credenciales incorrectas');
                }
                return response.json();
            })
            .then(data => {
                console.log('Respuesta del backend:', data);
                if (data.success) {
                    // Almacena el ID del usuario en localStorage
                    localStorage.setItem('userId', data.usuario.id);
                    loadPage("main");
                } else {
                    const errorMessage = document.getElementById('error-message');
                    if (errorMessage) {
                        errorMessage.style.display = 'block';
                    }
                }
            })
            .catch(error => {
                console.error('Error de conexión:', error);
                const errorMessage = document.getElementById('error-message');
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                } else {
                    console.error('No se encontró el elemento con id="error-message"');
                }
            });
        });

        document.getElementById('register-button').addEventListener('click', function () {
            loadPage('register'); // Carga la página de registro
        });

    } else if (page === 'register') {
        document.getElementById('registerForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe

            // Captura los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const contrasenha = document.getElementById('contrasenha').value;
            const contacto = document.getElementById('contacto').value;

            const roles = [];
            const roleCheckboxes = document.querySelectorAll('input[name="roles"]:checked');
            roleCheckboxes.forEach(checkbox => roles.push(checkbox.value));

            if (roles.length === 0) {
                alert("Por favor, selecciona al menos un rol.");
                return; // Detenemos el envío si no se selecciona ningún rol
            }

            // Crea un objeto con los datos del usuario
            const usuario = {
                nombre: nombre,
                email: email,
                contrasenha: contrasenha,
                contacto: contacto,
                roles: roles
            };

            // Envía los datos al backend
            fetch('http://localhost:8080/usuarios/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al registrar el usuario');
                }
                return response.json();
            })
            .then(data => {
                console.log('Usuario registrado:', data);
                alert('Registro exitoso!'); // Muestra un mensaje de éxito
                loadPage('login'); // Redirige al usuario a la página de inicio de sesión
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
        document.getElementById('user-icon').addEventListener('click', function () {
            document.getElementById('dropdown-menu').classList.toggle('show');
        });
    
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('dropdown-menu');
            const userIcon = document.getElementById('user-icon');
            if (!menu.contains(event.target) && !userIcon.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    
        document.getElementById('search-button-main').addEventListener('click', function () {
            const searchTerm = document.getElementById('search-bar-main').value.trim();
    
            if (searchTerm === "") {
                alert("Por favor, ingresa una palabra clave para buscar.");
                return;
            }
    
            fetch(`http://localhost:8080/usuarios/buscar?palabraClave=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Resultados de búsqueda:', data);
                    mostrarResultadosBusqueda(data, searchTerm);
                })
                .catch(error => {
                    console.error('Error en la búsqueda:', error);
                    alert('Error al realizar la búsqueda. Intenta nuevamente.');
                });
        });
    
    

        document.getElementById('chatBot').addEventListener('click', function (event) {
            event.preventDefault();  
            loadPage('chat');         
        });

        document.getElementById('menuIcon').addEventListener('click', function () {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            hamburgerMenu.classList.toggle('show');
            this.classList.toggle('active');
        });

        document.addEventListener('click', function (event) {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            const menuIcon = document.getElementById('menuIcon');

            if (!hamburgerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                hamburgerMenu.classList.remove('show');
                menuIcon.classList.remove('active');
            }
        });

        document.getElementById('logout').addEventListener('click', function (event) {
            event.preventDefault(); // Evita que el enlace navegue a otra página
            loadPage('login'); // Carga la página de inicio de sesión
        });

        document.getElementById('addCompetence').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('addResource');
        });

        document.getElementById('edit').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('editProfile');
        });

        document.getElementById('home').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('main');
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

    } else if (page == 'search') {
        document.getElementById('search-button').addEventListener('click', function () {
            const searchTerm = document.getElementById('search-bar').value;
            const tipo = document.getElementById('tipo').value;
            const rol = document.getElementById('roles').value;
    
            fetch(`http://localhost:8080/usuarios/buscar?palabraClave=${searchTerm}&tipo=${tipo}&rol=${rol}`)
                .then(response => response.json())
                .then(data => {
                    // Limpiamos el contenedor de resultados antes de agregar nuevos resultados
                    const resultsContainer = document.getElementById('search-results');
                    resultsContainer.innerHTML = ''; // Limpiar resultados previos
    
                    // Si no hay resultados, mostrar mensaje
                    if (data.length === 0) {
                        resultsContainer.innerHTML = '<p>No se encontraron resultados</p>';
                    } else {
                        const resultList = document.createElement('ul'); // Lista para los resultados
                        data.forEach(item => {
                            // Crear un item para cada resultado
                            const listItem = document.createElement('li');
                            listItem.classList.add('result-item');
                            
                            // Aquí usamos los valores que el backend devuelve
                            const tipo = item.tipo || 'Desconocido';
                            const descripcion = item.descripcion || 'Sin descripción';
                            const link = item.link || '#'; // El link puede venir del backend
    
                            listItem.innerHTML = `
                                <strong>Tipo:</strong> ${tipo} <br>
                                <a href="${link}" target="_blank">Enlace</a> <br>
                                <p>${descripcion}</p>
                            `;
                            resultList.appendChild(listItem);
                        });
    
                        resultsContainer.appendChild(resultList); // Agregar la lista de resultados al contenedor
                    }
                })
                .catch(error => {
                    console.error('Error en la búsqueda:', error);
                });
        });

        document.getElementById('menuIcon').addEventListener('click', function () {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            hamburgerMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
    
        document.addEventListener('click', function (event) {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            const menuIcon = document.getElementById('menuIcon');
    
            if (!hamburgerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                hamburgerMenu.classList.remove('show');
                menuIcon.classList.remove('active');
            }
        });
        
        document.getElementById('user-icon').addEventListener('click', function () {
            document.getElementById('dropdown-menu').classList.toggle('show');
        });
        
        document.getElementById('edit').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('editProfile');
        });
        
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('dropdown-menu');
            const userIcon = document.getElementById('user-icon');
        
            if (!menu.contains(event.target) && !userIcon.contains(event.target)) {
                menu.classList.remove('show');
            }
        });

        document.getElementById('logout').addEventListener('click', function (event) {
            event.preventDefault(); // Evita que el enlace navegue a otra página
            loadPage('login'); // Carga la página de inicio de sesión
        });

        document.getElementById('addCompetence').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('addResource');
        });
        document.getElementById('home').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('main');
        });

        document.getElementById('chatBot').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('chat');
        });

    } else if (page === 'editProfile') {
        const userId = obtenerUserId();
        if (!userId) {
            alert("No se pudo obtener el ID del usuario. Por favor, inicie sesión nuevamente.");
            return;
        }

        fetch(`http://localhost:8080/usuarios/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos del usuario');
            }
            return response.json();
        })
        .then(data => {
            // Rellenar los campos del formulario con los datos
            document.getElementById('nombre').value = data.nombre || '';
            document.getElementById('email').value = data.email || '';
            document.getElementById('contacto').value = data.contacto || '';
            document.getElementById('contrasenha').value = data.contrasenha || '';

        })
        .catch(error => {
            console.error('Error al cargar los datos del usuario:', error);
        });

        // Manejar el envío del formulario de edición de perfil
        document.getElementById('editProfileForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe

            // Captura los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const contacto = document.getElementById('contacto').value;
            const contrasenha = document.getElementById('contrasenha').value;
            const roles = document.getElementById('roles').value;

            // Crea un objeto con los datos del usuario
            const usuario = {
                nombre: nombre,
                email: email,
                contacto: contacto,
                contrasenha: contrasenha,
                roles: [{ nombre: roles }] // Asume que el usuario tiene un solo rol
            };

            // Envía los datos al backend para actualizar el perfil
            fetch(`http://localhost:8080/usuarios/${userId}/modificar`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al actualizar el perfil');
                }
                return response.json();
            })
            .then(data => {
                console.log('Perfil actualizado:', data);
                alert('Perfil actualizado con éxito!'); // Muestra un mensaje de éxito
                loadPage('main'); // Redirige al usuario a la página principal
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
        
        document.getElementById('menuIcon').addEventListener('click', function () {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            hamburgerMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
    
        document.addEventListener('click', function (event) {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            const menuIcon = document.getElementById('menuIcon');
    
            if (!hamburgerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                hamburgerMenu.classList.remove('show');
                menuIcon.classList.remove('active');
            }
        });

        document.getElementById('user-icon').addEventListener('click', function () {
            document.getElementById('dropdown-menu').classList.toggle('show');
        });
        
        document.getElementById('edit').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('editProfile');
        });
        
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('dropdown-menu');
            const userIcon = document.getElementById('user-icon');
        
            if (!menu.contains(event.target) && !userIcon.contains(event.target)) {
                menu.classList.remove('show');
            }
        });

        document.getElementById('logout').addEventListener('click', function (event) {
            event.preventDefault(); // Evita que el enlace navegue a otra página
            loadPage('login'); // Carga la página de inicio de sesión
        });

        document.getElementById('addCompetence').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('addResource');
        });
        document.getElementById('home').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('main');
        });

        document.getElementById('chatBot').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('chat')();
        });

    } else if (page == 'addResource') {
        // Event listener para el menú de usuario (icono de usuario)
        document.getElementById('user-icon').addEventListener('click', function () {
            document.getElementById('dropdown-menu').classList.toggle('show');
        });
    
        // Cerrar el menú de usuario si se hace clic fuera
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('dropdown-menu');
            const userIcon = document.getElementById('user-icon');
    
            if (!menu.contains(event.target) && !userIcon.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    
        // Event listener para el menú hamburguesa
        document.getElementById('menuIcon').addEventListener('click', function () {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            hamburgerMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
    
        // Cerrar el menú hamburguesa si se hace clic fuera
        document.addEventListener('click', function (event) {
            const hamburgerMenu = document.getElementById('burg-dropdown-menu');
            const menuIcon = document.getElementById('menuIcon');
    
            if (!hamburgerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                hamburgerMenu.classList.remove('show');
                menuIcon.classList.remove('active');
            }
        });

        document.getElementById('chatBot').addEventListener('click', function (event) {
            event.preventDefault();
            loadPage('chat')();
        });
    
                // Event listener para el formulario de añadir recurso
        document.getElementById('addResourceForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe

            // Captura los datos del formulario
            const tipoSeleccionado = document.getElementById('tipo').value;
            const nombre = document.getElementById('name').value;
            const descripcion = document.getElementById('desc').value;

            // Mapear los valores seleccionados al formato que espera el backend
            const tipoMapeado = {
                tec: "tecnologia",
                cur: "curso",
                recur: "recurso"
            };

            // Crea un objeto con los datos del recurso
            const recurso = {
                tipo: tipoMapeado[tipoSeleccionado] || "recurso", // Default a "recurso" si no se selecciona
                nombre: nombre,
                descripcion: descripcion
            };

            // Verificación en consola
            console.log("User ID:", obtenerUserId());
            console.log("Enviando recurso:", recurso);

            // Obtén el ID del usuario actual
            const userId = obtenerUserId();

            if (!userId) {
                alert("No se pudo obtener el ID del usuario. Por favor, inicie sesión nuevamente.");
                return;
            }

            // Envía los datos al backend para añadir el recurso
            fetch(`http://localhost:8080/usuarios/${userId}/recurso`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recurso)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al añadir el recurso');
                }
                return response.json();
            })
            .then(data => {
                console.log('Recurso añadido:', data);
                alert('Recurso añadido con éxito!'); // Muestra un mensaje de éxito
                loadPage('main'); // Redirige al usuario a la página principal
            })
            .catch(error => {
                console.error('Error de conexión:', error);
                alert('Error al añadir el recurso');
            });
        });


    }
}

// Cargamos la página de inicio de sesión por defecto al cargar la aplicación
document.addEventListener('DOMContentLoaded', function () {
    loadPage('login'); // Ahora se ejecutará cuando el DOM esté listo
});
