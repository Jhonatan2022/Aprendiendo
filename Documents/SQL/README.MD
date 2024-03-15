# MySQL y MariaDB

- [MariaDB](https://downloads.mariadb.org/mariadb/10.5.8/)
- [Mariadb Grants](https://mariadb.com/kb/en/grant/) Permisos de usuarios

1. Abrimos el programa `MariaDB`, digitamos la contraseña y agregamos el path de la carpeta `bin` de `MariaDB` a las variables de entorno

![](../../img/sql/User%20Root.png)
![](../../img/sql/Add%20to%20path.png)

## Coneccion a la base de datos

```sh
mariadb -u root -p # Ingresamos la contraseña
CREATE USER 'soporte'@'localhost' IDENTIFIED BY '123'; # Creamos un usuario
DROP USER 'soporte'@'localhost'; # Eliminamos un usuario
GRANT ALL PRIVILEGES ON *.* TO 'soporte'@'localhost'; # Damos permisos de administrador
mariadb -u soporte -p # Ingresamos con el usuario creado y verificamos los permisos
```

# Practico SQL

[PostgreSQL](https://www.postgresql.org/download/)

- Abrimos la shell de PostgreSQL y ejecutamos los siguientes comandos

```sh
# Indicamos nuestra propia maquina como servidor, también se puede 127.0.0.1
Server [localhost]: localhost
# Podemos dejar los valores por defecto dando enter
Contraseña: root
```

Bases de datos distribuidas: Colección de múltiples bases de datos separadas físicamente que se comunican mediante una red informática.

## VENTAJAS:

- desarrollo modular ( se puede desarrollar por partes).
- incrementa la confiabilidad (si una falla, las demás pueden seguir funcionando).
- mejora el rendimiento (se pueden hacer consultas en paralelo).
- mayor disponibilidad de datos.
- rapidez de respuesta (se pueden hacer consultas en paralelo).

## DESVENTAJAS:

- Manejo de seguridad más complejo.
- complejidad de procesamiento de consultas.
- Integridad de datos más compleja (si se cae una, se caen todas).
- Costo de implementación y mantenimiento.

## TIPOS:

- Homogéneas: mismo tipo de BD, manejador y sistema operativo. (aunque esté distribuida).
- Heterogénea: puede que varíen alguna de los anteriores características.
- OS
- Sistema de bases de datos.
- Modelo de datos.

## ARQUITECTURAS:

- Cliente- servidor: Hay una BD principal y tiene varias BD que sirven como clientes o como esclavas que tratarán de obtener datos de la principal, a la que normalmente se hacen las escrituras.

- Par a par (peer 2 peer): Todos los puntos en la red de bd son iguales y se hablan como iguales sin tener que responder a una sola entidad.

## ESTRATEGIA DE DISEÑO:

- top down: es cuando planeas muy bien la BD y la vas configurando de arriba hacia abajo de acuerdo a tus necesidades.
- bottom up: ya existe esa BD y tratas de construir encima.
