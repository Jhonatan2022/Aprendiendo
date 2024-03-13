# Corremos un contenedor con la imagen de node 12
FROM node:14

# Copiamos las dependencias del package.json y package-lock.json para que no se instalen cada vez que se cambie el código
COPY ["package.json", "package-lock.json", "/usr/src/"]

# Definimos el directorio de trabajo
WORKDIR /usr/src

# Instalamos las dependencias
RUN npm install

# Copiamos el contenido de la carpeta actual a la carpeta /usr/src dentro del contenedor
COPY [".", "/usr/src/"]

# Exponemos el puerto 3000 para que se pueda acceder desde fuera del contenedor
EXPOSE 3000

# Ejecutamos el comando node index.js para iniciar la aplicación
CMD ["node", "index.js"]
