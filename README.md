# 📚 Procedimientos para configurar el proyecto

## 🚀 1. Clonar el repositorio

Clona el repositorio usando el siguiente comando:

```bash
git clone https://github.com/alcalaluis-28/libro-tarea7.git
```
🛠️ 2. Restaurar la Base de Datos
```
Ejecuta el siguiente código SQL en MySQL Workbench o tu cliente favorito de base de datos:
CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE libros (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    titulo          VARCHAR(50)          NOT NULL,
    autor           VARCHAR(50)          NOT NULL,
    numpaginas      INT                   NOT NULL,
    categoria       VARCHAR(50)          NOT NULL
) ENGINE = INNODB;
```
💻 3. Abrir el proyecto en VSCode
```
Abre VSCode y carga el proyecto descargado.
```
⏳ 4. Instalar Dependencias
```
Abre la terminal CTRL + Ñ y ejecuta el siguiente comando para instalar las dependencias necesarias:
```
🔑 5. Configurar el archivo .env

Crea el archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno para la configuración de la base de datos
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=biblioteca
DB_PORT=3306
```
⚡ 6. Ejecutar el Servidor

Para iniciar el servidor con nodemon, primero instala nodemon globalmente (si no lo tienes):
```
npm install -g nodemon
```
Luego, ejecuta el servidor con el siguiente comando:
```
nodemon server.js
```
🧪 7. Verificar los verbos (GET/POST/PUT/DELETE) con Thunder Client

Para probar y verificar que los verbos HTTP (GET, POST, PUT, DELETE) estén funcionando correctamente, usa Thunder Client. Aquí te dejo cómo configurarlo:
```
📝 Pasos para probar la API en Thunder Client:

Instala Thunder Client en VSCode desde el marketplace de extensiones.

Abre Thunder Client en VSCode (Thunder Client en el menú lateral de VSCode).

Configura las rutas de la API para probar los verbos HTTP:

GET: Para listar todos los libros o buscar un libro por ID.

POST: Para crear un libro nuevo.

PUT: Para actualizar un libro existente.

DELETE: Para eliminar un libro por ID.

Ejemplo de una petición POST para crear un libro:

URL: http://localhost:3000/api/libro

Método: POST

Cuerpo (JSON):
```
📋 8. Documentación del Proyecto
```
Asegúrate de seguir las rutas y estructuras de datos establecidas en el proyecto:

Endpoint de creación de libro: /api/libro (Método POST)

Endpoint de listado de libros: /api/libro (Método GET)

Endpoint de actualización de libro: /api/libro/:id (Método PUT)

Endpoint de eliminación de libro: /api/libro/:id (Método DELETE)
```
🖥️ 9. Comandos Útiles
Ejecutar servidor:
```
npx nodemon server.js
```
Instalar dependencias:
```
npm install
```
📱 10. Probar la API
```
Asegúrate de tener la aplicación en funcionamiento accediendo a las rutas y verificando que los verbos HTTP (GET/POST/PUT/DELETE) estén operando correctamente usando Thunder Client.
```
👨‍🏫 Recursos y Herramientas
```
MySQL Workbench: Para manejar la base de datos de manera visual.

Thunder Client: Para probar los endpoints de la API.

VSCode: Para editar el código y ejecutar el servidor.

