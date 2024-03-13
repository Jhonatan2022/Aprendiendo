# Curso de introducción a la Terminal y Linea de Comandos

```sh
# Abrimos powershell y digitamos el comando
wsl -install # wsl es el comando para instalar el subsistema de linux en windows
# Esperamos a que la barra de progreso llegue al 100% y presionamos Enter para iniciar el proceso de instalación
# Una vez finalizado el proceso de instalación, reiniciamos el equipo para que los cambios surtan efecto he ingresamos nuestro usuario y contraseña
User = jflorez
Password = Colombia.1
passwd # Nos permite cambiar la contraseña de nuestro usuario
```

## Si ingresas el comando ls y no aparece nada tiene que moverte a tu directorio

```sh
cd /mnt/c/Users/"Tu usuario de Windows"
```

## Comandos

```sh
clear # Limpia la terminal de comandos
cd # Cambia de directorio
cd .. # Regresa al directorio anterior
cd / # Regresa al directorio raiz
cd ~ # Regresa al directorio del usuario
cd /mnt/c/Users/"Tu usuario de Windows" # Cambia al directorio de Windows
pwd # Muestra la ruta del directorio actual en el que nos encontramos
```

```sh
mkdir # Crea un directorio
mkdir -p # Crea un directorio y los directorios padres que no existan
touch # Crea un archivo vacio
file "Nombre del archivo" # Muestra el tipo de archivo
mv # Mueve un archivo o directorio, tambien se puede usar para renombrar
```

```sh
rm # Elimina un archivo
rm -i # Elimina un archivo o directorio y pide confirmación antes de eliminar
rm -r # Elimina un directorio y su contenido
rm -ri # Elimina un directorio y su contenido y pide confirmación antes de eliminar
rm -rf # Elimina un directorio y su contenido sin pedir confirmación
```

```sh
ls # Lista los archivos y carpetas del directorio actual
ls -l # Lista los archivos y carpetas del directorio actual con sus permisos
ls -a # Lista los archivos y carpetas del directorio actual incluyendo los ocultos
ls -la # Lista los archivos y carpetas del directorio actual incluyendo los ocultos con sus permisos
ls -lh # Lista los archivos y carpetas del directorio actual con sus permisos y tamaños en KB
ls -lha # Lista los archivos y carpetas del directorio actual incluyendo los ocultos con sus permisos y tamaños
ls -lS # Lista los archivos y carpetas del directorio actual con sus permisos y tamaños en KB ordenados por tamaño
ls -lr # Lista los archivos y carpetas del directorio actual con sus permisos ordenados de forma inversa
```

```sh
head # Muestra las primeras 10 lineas de un archivo
head -n "Numero" # Muestra las primeras lineas de un archivo con el numero de lineas que le indiquemos
tail # Muestra las ultimas 10 lineas de un archivo
tail -n "Numero" # Muestra las ultimas lineas de un archivo con el numero de lineas que le indiquemos
```

```sh
less # Muestra el contenido de un archivo de forma interactiva
# Podemos presionar / y escribir la palabra que queremos buscar y presionar Enter para buscarla
# Presionamos Q para salir de less
```

```sh
xdg-open "Nombre del archivo" # Abre un archivo con la aplicación predeterminada
nautilus # Abre el explorador de archivos
```

```sh
# Ejecutables = Comandos que se encuentran en el disco duro
# Comandos internos de la shell = Comandos que se encuentran en la memoria RAM
# Alias = Comandos personalizados
# Binarios = Ejecutables
type "Nombre del comando" # Muestra el tipo de comando
which "Nombre del comando" # Muestra la ruta del comando
```

```sh
alias "Nombre Alias" = "Comando" # Crea un alias para un comando personalizado
unalias "Nombre Alias" # Elimina un alias
```

```sh
"Comando" --help # Muestra la ayuda de un comando con sus opciones
man "Comando" # Muestra la ayuda de un comando con sus opciones
info "Comando" # Muestra la ayuda de un comando con sus opciones
whatis "Comando" # Muestra la ayuda de un comando con sus opciones
```

## Wildcards o comodines

```sh
ls *.txt # Lista los archivos y carpetas del directorio actual con la extension que le indiquemos
ls "Nombre"* # Lista los archivos y carpetas del directorio actual con el nombre que le indiquemos
ls "Nombre"? # Lista los archivos y carpetas del directorio actual con el nombre que le indiquemos y la cantidad de caracteres que le indiquemos
ls [[:upper:]]* # Nos muestra los archivos y carpetas que empiecen con mayuscula en el directorio actual
ls -d [[:upper:]]* # Nos muestra los archivos y carpetas que empiecen con mayuscula en el directorio actual
ls [[:lower:]]* # Nos muestra los archivos y si agregamos -d las carpetas que empiecen con minuscula en el directorio actual
ls ["Lestras"]* # Nos muestra los archivos y carpetas que empiecen con las letras que le indiquemos en el directorio actual
```

## Redireccionamiento

```sh
# Redireccionamiento de entrada
ls "Nombre del diretorio" >> "Nombre del archivo" # Redirecciona la salida de un comando a un archivo
ls jcjd 2> "Nombre del archivo" # Redirecciona la salida de error de un comando a un archivo
ls jcjd &> "Nombre del archivo" 2>&1 # Redirecciona la salida tanto de error como de un comando a un archivo
```

```sh
# input = entrada
# output = salida
echo "Texto" # Muestra un texto en la terminal
cat "Nombre del archivo" + "Nombre de archivo" # Nos sirve para concatenar archivos y mostrarlos en la terminal
ls -lh | less # Nos sirve para concatenar comandos y mostrarlos en la terminal
ls -lh | tee hola.txt | less # Nos sirve para concatenar comandos y mostrarlos en la terminal y guardarlos en un archivo
```

## Operadores de control

```sh
ls; mkdir "Nombre del directorio"; cal # Nos sirve para ejecutar varios comandos en una sola linea de comandos
ls & date & cal # Nos permite ejecutar varios comandos en segundo plano y nos muestra el PID de cada proceso
mkdir "Nombre del directorio" && cd "Nombre del directorio" # Nos permite ejecutar un comando si el comando anterior se ejecuto correctamente
cd dkkd || echo "Hola" # Nos permite ejecutar un comando si el comando anterior no se ejecuto correctamente
```

## Modificando permisos en la terminal

```sh
# https://josenoriegaa.github.io/linux-file-system-permission-generator/index.html
cat > hola.txt # Nos permite crear un archivo y escribir en el ctrl + d para salir
chmod 755 holi.txt # Nos permite modificar los permisos de un archivo
```

## Comandos de busqueda

```sh
wich "Nombre del comando" # Nos muestra la ruta del comando
find ./ -name "Nombre del archivo" # Busca un archivo en todo el sistema que coincida con el nombre que le indiquemos
find ./ -size 10M # Busca un archivo en todo el sistema que coincida con el tamaño que le indiquemos
```

```sh
grep "Texto" "Nombre del archivo" # Busca un texto en un archivo
grep -i "Texto" "Nombre del archivo" # Busca un texto en un archivo sin importar si esta en mayuscula o minuscula
grep -c "Texto" "Nombre del archivo" # Busca un texto en un archivo y nos muestra el numero de veces que se repite
grep -ci "Texto" "Nombre del archivo" # Busca un texto en un archivo sin importar si esta en mayuscula o minuscula y nos muestra el numero de veces que se repite
grep -v "Texto" "Nombre del archivo" # Busca un texto en un archivo y nos muestra las lineas que no coinciden con el texto
wc # Nos muestra el numero de lineas, palabras y caracteres de un archivo
wc -l # Nos muestra el numero de lineas de un archivo
wc -w # Nos muestra el numero de palabras de un archivo
wc -c # Nos muestra el numero de caracteres de un archivo
```

## Utilidades de red

```sh
ifconfig # Nos muestra la configuracion de red de nuestro equipo
ping "Direccion IP" # Nos permite hacer ping a una direccion IP
ping -c "Numero" "Direccion IP" # Nos permite hacer ping a una direccion IP con el numero de veces que le indiquemos
curl "Direccion IP" # Nos trae el codigo fuente de una pagina web
wget "Direccion IP" # Nos permite descargar un archivo de una pagina web
traceroute "Direccion IP" # Nos muestra la ruta que sigue un paquete para llegar a una direccion IP
netstat -i # Nos muestra las interfaces de red de nuestro equipo
```

## Compresion de archivos

```sh
zip "Nombre del archivo".zip "Nombre del archivo" # Nos permite comprimir un archivo en formato zip
unzip "Nombre del archivo".zip # Nos permite descomprimir un archivo en formato zip
tar -zxvf "Nombre del archivo" # Nos permite descomprimir un archivo en formato zip
tar -xzvf.tar.gz # Nos permite descomprimir un archivo en formato tar.gz
```

## Manejo de procesos

```sh
ps # Nos muestra los procesos que se estan ejecutando en el sistema
ps -e # Nos muestra los procesos que se estan ejecutando en el sistema
top # Nos muestra los procesos que se estan ejecutando en el sistema
kill "PID" # Nos permite matar un proceso
```

```sh
fg % "Numero" # Nos permite traer un proceso a primer plano
bg "Numero" # Nos permite traer un proceso a segundo plano
jobs # Nos muestra los procesos que se estan ejecutando en segundo plano
```

## Editores de texto dentro de la terminal

```sh
vim "Nombre del archivo" # Nos permite editar un archivo
nano "Nombre del archivo" # Nos permite editar un archivo
```

## Personalizar la terminal

```sh
# https://gnunn1.github.io/tilix-web/
# Camos a usar tilix
sudo apt install tilix # Instala tilix en Ubuntu
# Usaremos zsh para personalizar la terminal
sudo apt install zsh # Instala zsh en Ubuntu
chsh -s $(which zsh) # Cambia la shell de bash a zsh
```

## En caso de que no funcione

```sh
# Tree nos muestra la estructura de directorios y archivos de forma grafica
tree --version # Muestra la version de tree
sudo apt-get update # Actualiza los repositorios de Ubuntu para poder instalar tree
sudo apt-get install tree # Instala tree en Ubuntu
```

```sh
tree # Muestra la estructura de directorios y archivos de forma grafica
tree -d # Muestra la estructura de directorios de forma grafica
tree -a # Muestra la estructura de directorios y archivos de forma grafica incluyendo los ocultos
tree -C # Muestra la estructura de directorios y archivos de forma grafica con colores
tree -L`"Nivel de capa" # Muestra la estructura de directorios y archivos de forma grafica con el nivel de profundidad que le indiquemos
```
