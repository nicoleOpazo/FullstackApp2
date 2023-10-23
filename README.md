# FullstackApp2: Aplicación Web Full Stack - Usuarios y Carritos

Esta es una aplicación web Full Stack que permite gestionar usuarios y carritos a través de una interfaz desarrollada en Angular para el Front-End y una API REST desarrollada en Spring Boot para el Back-End. La aplicación utiliza una base de datos H2 en memoria y ofrece varios endpoints para realizar operaciones CRUD en las entidades de Usuarios y Carritos.

## Características

1. **Inicio **: Página de inicio de la aplicación. Proporciona una descripción general de la aplicación y sus características.

2. **Registros**: Muestra los usuarios registrados. Ofrece una interfaz de usuario para visualizar los datos de la entidad "Usuarios" a través de la API REST.

3. **Acerca de**: Indica los datos del autor de este proyecto.

## Configuración de Rutas

La aplicación utiliza el enrutamiento de Angular para navegar entre los componentes.

## Back-End Spring Boot

El Back-End de la aplicación se desarrolla en Spring Boot y ofrece una API REST que gestiona las entidades "Usuarios" y "Carritos". Utiliza una base de datos H2 en memoria para almacenar los datos y ofrece varios endpoints para realizar operaciones CRUD en estas entidades.

## Descarga

Puedes clonar el repositorio utilizando Git:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

## Requisitos Previos

- [Node](https://nodejs.org/en)
- [Angular](https://angular.io/)
- [Java](https://www.oracle.com/java/technologies/downloads/)
- [Maven](https://maven.apache.org/)

## Ejecución

- **Inicia el Back-End Spring Boot:** Puede compilar y ejecutar el proyecto utilizando Maven y Spring Boot desde la línea de comandos o desde su IDE. Asegúrese de tener Java y Maven instalados en su sistema. `mvn spring-boot:run`
- **Inicia el Front-End Angular:** Asegúrese de tener Node y Angular instalados en su sistema. Puede ejecutar la solución utilizando el comando `ng serve -o`.
- **Registro de usuarios:** Ingresa a la pestaña de registro y crea un nuevo usuario cumpliendo con todas las validaciones correspondientes. Después de registrar un usuario, podrás verlo en la sección de Registros en la aplicación.

