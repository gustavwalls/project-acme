# AcmeProject

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Ejecucion del proyecto

1.Clonar y abrir el proyecto , abrir una terminar y ejecutar `git checkout master`.

1.Ejecutar `npm i --force` para instalar dependencias del proyecto.

## Servidor de desarrollo

1.Ejecutar `npm install -g json-server` para la BD del servidor.

2.Ejecutar `json-server --watch db.json` para la BD del servidor.

3.Abrir otra termianr y ejecutar `ng s` para levantar el cliente.

4.Navegar a `http://localhost:4200/` para la ejecucion del aplicativo.

## Sesiones del aplicativo

Este proyecto se baso en la validacion de roles de manera estatica , haciendo uso de cookies para tener la sesion activa.
Por lo tanto:

1.Si el usuario entra con el correo `operario@example.com` y contraseña cualquiera podra ver los productos y gestion de ellos.

2.Si el usuario entra con un correo cualquiera diferente al anterior ya mencionado , podra ver el reporte de los productos.
