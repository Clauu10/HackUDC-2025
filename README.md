# HackUDC-2025

Pasos para ejecutar el docker:
1) Instalar docker
2) Levantar los contenedores: "docker-compose up --build", crea un contenedor para la BD de PostgreSQL y otro para la app en Spring.
3) Verificar que las tablas se han rellenado correctamente (SELECT * FROM usuario;)
4) Si no se han creado, con los contenedores funcionando, en otra terminal "docker exec -it postgres_db psql -U xpn -d CompetenciApp" + "docker cp init.sql postgres_db:/tmp/init.sql" + "\i /tmp/init.sql"
5) Verificar que las tablas se han rellenado correctamente (SELECT * FROM usuario;).
6) Salir de la BD "\q"
7) Comprobar que funciona con postman
8) Ctrl + c para parar el docker
9) "docker-compose down" para detener los contenedores