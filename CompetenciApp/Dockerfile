# Usa una imagen base de Java
FROM openjdk:17-jdk-alpine

# Copia el archivo JAR de tu aplicación
COPY target/CompetenciApp-0.0.1-SNAPSHOT.jar app.jar

# Puerto en el que corre tu aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]

#TIENE QUE ESTAR EN EL DIRECTORIO RAIZ DEL PROYECTO
#define como se va a construir la imagen de nuestra aplicación