-- Crear la tabla 'roles'
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Crear la tabla 'tecnologias'
CREATE TABLE IF NOT EXISTS tecnologias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo VARCHAR(255),
    descripcion TEXT
);

-- Crear la tabla 'recursos'
CREATE TABLE IF NOT EXISTS recursos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo VARCHAR(255),
    descripcion TEXT
);

-- Crear la tabla 'cursos'
CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo VARCHAR(255),
    descripcion TEXT
);

-- Crear la tabla 'usuario'
CREATE TABLE IF NOT EXISTS usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contrasenha VARCHAR(255) NOT NULL,
    contacto VARCHAR(255)
);

-- Crear la tabla 'usuario_rol'
CREATE TABLE IF NOT EXISTS usuario_rol (
    usuario_id INT REFERENCES usuario(id),
    rol_id INT REFERENCES roles(id),
    PRIMARY KEY (usuario_id, rol_id)
);

-- Crear la tabla 'usuario_tecnologia'
CREATE TABLE IF NOT EXISTS usuario_tecnologia (
    usuario_id INT REFERENCES usuario(id),
    tecnologia_id INT REFERENCES tecnologias(id),
    PRIMARY KEY (usuario_id, tecnologia_id)
);

-- Crear la tabla 'usuario_curso'
CREATE TABLE IF NOT EXISTS usuario_curso (
    usuario_id INT REFERENCES usuario(id),
    curso_id INT REFERENCES cursos(id),
    PRIMARY KEY (usuario_id, curso_id)
);

-- Crear la tabla 'usuario_recurso'
CREATE TABLE IF NOT EXISTS usuario_recurso (
    usuario_id INT REFERENCES usuario(id),
    recurso_id INT REFERENCES recursos(id),
    PRIMARY KEY (usuario_id, recurso_id)
);

-- Insertar datos en la tabla 'roles'
INSERT INTO roles (nombre) VALUES
('Administrador'),
('Usuario'),
('Invitado');

-- Insertar datos en la tabla 'tecnologias'
INSERT INTO tecnologias (nombre, tipo, descripcion) VALUES
('Java', 'Lenguaje', 'hgfgfc'),
('Python', 'Lenguaje', 'hgfgfc'),
('JavaScript', 'Lenguaje', 'hgfgfc'),
('Docker', 'Herramienta', 'hgfgfc'),
('Spring Boot', 'Framework', 'hgfgfc');

-- Insertar datos en la tabla 'recursos'
INSERT INTO recursos (nombre, tipo, descripcion) VALUES
('Introducción a Java', 'Video', 'https://youtube.com/java-intro'),
('Guía de Docker', 'Documento', 'https://docs.docker.com'),
('Spring Boot en 10 minutos', 'Video', 'https://youtube.com/spring-boot');

-- Insertar datos en la tabla 'cursos'
INSERT INTO cursos (nombre, tipo, descripcion) VALUES
('Curso de Java', 'Desarrollo', 'Aprende Java desde cero'),
('Curso de Docker', 'Contenerización', 'Domina la contenerización con Docker'),
('Curso de Spring Boot', 'Desarrollo', 'Desarrollo de aplicaciones con Spring Boot');

-- Insertar datos en la tabla 'usuario'
INSERT INTO usuario (nombre, email, contrasenha, contacto) VALUES
('Juan Pérez', 'juan@example.com', 'password123', '123456789'),
('Ana Gómez', 'ana@example.com', 'password456', '987654321');

-- Insertar relaciones en la tabla 'usuario_rol'
INSERT INTO usuario_rol (usuario_id, rol_id) VALUES
(1, 1),  -- Juan Pérez es Administrador
(2, 2);  -- Ana Gómez es Usuario

-- Insertar relaciones en la tabla 'usuario_tecnologia'
INSERT INTO usuario_tecnologia (usuario_id, tecnologia_id) VALUES
(1, 1),  -- Juan Pérez sabe Java
(1, 4),  -- Juan Pérez sabe Docker
(2, 2),  -- Ana Gómez sabe Python
(2, 3);  -- Ana Gómez sabe JavaScript

-- Insertar relaciones en la tabla 'usuario_curso'
INSERT INTO usuario_curso (usuario_id, curso_id) VALUES
(1, 1),  -- Juan Pérez está en el Curso de Java
(2, 2);  -- Ana Gómez está en el Curso de Docker

-- Insertar relaciones en la tabla 'usuario_recurso'
INSERT INTO usuario_recurso (usuario_id, recurso_id) VALUES
(1, 1),  -- Juan Pérez usa el Recurso 1 (Video de Java)
(2, 2);  -- Ana Gómez usa el Recurso 2 (Guía de Docker)