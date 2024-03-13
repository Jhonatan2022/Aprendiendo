# Curso Profesional De Git y Github

## Primeros pasos con Git

```sh
git config --global user.name "Nombre" # Nos sirve para configurar el nombre de usuario
git config --global user.email "Correo" # Nos sirve para configurar el correo de usuario
git config --global -l # Nos sirve para ver la configuración de git
git config --list # Nos sirve para ver la configuración de git
```

```sh
git init # inicializar un repositorio
git status # Nos sirve para ver el estado de los archivos
```

```sh
git add # Nos sirve para agregar archivos al stage
git add . # Nos sirve para agregar todos los archivos al
git commit -am "Mensaje" # am = add + commit
git commit -m "Mensaje" # Nos sirve para crear un commit stage
# En caso de entrar a vim presionamos la tecla "i" para entrar al modo de edición y despues presionamos "Esc"
# Para salir presionamos "Esc", ":wq" y despues "Enter"
```

```sh
git pull # Nos sirve para traer los cambios del repositorio remoto
git push # Nos sirve para mandar los cambios al repositorio remoto
git pull origin "Nombre" --allow-unrelated-histories # Nos sirve para traer los cambios de una rama que no tiene relacion con la rama en la que estamos
```

```sh
# Actualizareoms un fork con los cambios que se han hecho en el repositorio original
git remote -v # Nos sirve para ver los repositorios remotos que hay
git remote add upstream "Link del repositorio original" # sirve para actualizar un fork con los cambios que se han hecho en el repositorio original
git pull upstream master # Nos sirve para traer los cambios del repositorio original
```

```sh
git branch # Nos sirve para ver las ramas que hay
git branch "Nombre" # Nos sirve para crear una rama
git checkout "Nombre" # Nos sirve para cambiar de rama
git checkout -b "Nombre" # Nos sirve para crear una rama y cambiarnos a ella
git branch -d "Nombre" # Nos sirve para eliminar una rama
git push origin --delete nombre_de_rama # Nos sirve para eliminar una rama del repositorio remoto
git show-branch # Nos sirve para ver las ramas que hay y los commits que se han hecho
git show-branch --all # Nos sirve para ver las ramas que hay y los commits que se han hecho de una manera mas visual
```

```sh
# Nos posicionamos en la rama donde queremos traer los cambios en este caso "master"
git merge 'Rama que queremos traer los cambios' # Nos sirve para traer los cambios de una rama a otra
git rebase "Nombre" # Nos sirve para unir una rama con la rama en la que estamos pero de una manera mas limpia
```

## Solucionando conflictos

```sh
# Accep current change = Acepta los cambios actuales
# Accept incoming change = Acepta los cambios entrantes
# Accept both changes = Acepta ambos cambios
# Compare changes = Compara los cambios
```

```sh
git diff # Nos sirve para ver los cambios que se han hecho entre el stage y el repos
```

```sh
git rm # Sin el --cached nos sirve para eliminar archivos del stage y del repositorio
git rm --cached # Nos sirve para quitar archivos del stage
```

```sh
git show # Nos sirve para ver los cambios que se han hecho
gitk # Nos abre una interfaz grafica para ver los cambios que se han hecho
```

```sh
git log # Nos sirve para ver los commits que se han hecho
git log --stat # Nos sirve para ver los commits que se han hecho y los cambios que se han hecho
git log --all --graph --decorate --oneline # Nos sirve para ver los commits que se han hecho de una manera mas visual
alias arbolito="git log --all --graph --decorate --oneline" # Nos sirve para crear un alias para el comando anterior y poder ejecutarlo con el nombre que le asignamos
```

```sh
# Crearemos un tag para el commit que queramos
git tag -a "Nombre" -m "Mensaje" + "Hash que queremos" # Nos sirve para crear un tag, tag es una etiqueta que se le pone a un commit
git tag # Nos sirve para ver los tags que hay
git show-ref --tags # Nos sirve para ver los tags y los commits a los que estan asociados
git push --tags # Nos sirve para mandar los tags al repositorio remoto
git tag -d "Nombre" # Nos sirve para eliminar un tag
git push origin "Nombre Rama" :refs/tags/"Nombre" # Nos sirve para eliminar un tag del repositorio remoto
```

```sh
git reset # Nos sirve para regresar a un commit anterior
git reset --hard # Nos sirve para regresar a un commit anterior y eliminar los cambios que se han hecho
git reset --soft # Nos sirve para regresar a un commit anterior y mantener los cambios que se han hecho
git reset --mixed # Nos sirve para regresar a un commit anterior y mantener los cambios que se han hecho en el stage
git reset HEAD # Nos sirve para regresar los archivos del stage al repositorio
```

![](../../img/github/Git%20Reset%20Exolication.png)

```sh
git stash # Nos sirve para guardar los cambios que se han hecho en una pila
git stash list # Nos sirve para ver los cambios que se han guardado en la pila
git stash pop # Nos sirve para sacar los cambios que se han guardado en la pila
git stash drop # Nos sirve para eliminar los cambios que se han guardado en la pila
```

```sh
git clean # Nos sirve para eliminar los archivos que no estan en el stage
git clean --dry-run # Nos sirve para ver los archivos que se van a eliminar
git clean -f # Nos sirve para eliminar los archivos que no estan en el stage
```

```sh
git cherry-pick "Hash del commit" # Nos sirve para traer un commit de otra rama
git commit --amend # Nos sirve para editar el mensaje del ultimo commit y agregar los cambios que se han hecho (No se crea un nuevo commit)
```

```sh
git grep -n "Texto" # Nos sirve para buscar un texto en los archivos y nos dice en que linea se encuentra
git grep -c "Texto" # Nos sirve para buscar un texto en los archivos y nos dice cuantas veces se repite
git log -S "Texto" # Nos sirve para buscar un texto en los commits
```

```sh
git reflog # Nos sirve para ver los commits que se han hecho
git reset --hard "Hash del commit" # Nos sirve para regresar a un commit anterior
```

```sh
pwd # Nos sirve para ver la ruta en la que estamos
# ~ Es cuando estamos en la carpeta de usuario (Home)
# / Es cuando estamos en la raiz del sistema operativo (Root)
cd .. # Nos sirve para regresar un directorio (Carpeta)
cd / # Nos sirve para ir a la raiz del sistema operativo (Root)
```

```sh
ls # Nos sirve para ver los archivos que hay en la carpeta
ls -al # Nos sirve para listar todos los archivos de la carpeta, incluyendo los ocultos
```

```sh
mkdir # Nos sirve para crear una carpeta
touch # Nos sirve para crear un archivo
```

```sh
cat # Nos sirve para ver el contenido de un archivo
vi "Nombre archivo" # Nos sirve para editar un archivo
```

```sh
history # Nos sirve para ver el historial de comandos que hemos ejecutado
!(Número del comando) # Nos sirve para ejecutar un comando del historial
```

```sh
rm --help # Nos sirve para ver la ayuda de un comando (En este caso rm)
rm # Nos sirve para eliminar un archivo
rm -rf # Nos sirve para eliminar una carpeta
```

# Usando Alias en Git

```sh
git shortlog -sn # Nos sirve para ver los commits que se han hecho y quien los hizo
git shortlog -sn --all # Nos sirve para ver los commits que se han hecho y quien los hizo de todas las ramas
git shortlog -sn --all --no-merges # Nos sirve para ver los commits que se han hecho y quien los hizo de todas las ramas sin los merges
git config --global alias.stats "git shortlog -sn --all --no-merges" # Nos sirve para crear un alias para el comando anterior y poder ejecutarlo con el nombre que le asignamos
```

```sh
git blame -c "Nombre archivo" # Nos sirve para ver quien hizo los cambios en un archivo
git blame -c "Nombre archivo" -L "Linea inicial (2), Linea final (45)" # Nos sirve para ver quien hizo los cambios en un archivo en un rango de lineas
```

# Creación de llaves SSH para GitHub

```sh
ssh-keygen -t rsa -b 4096 -C "Correo" # Nos sirve para generar una llave SSH
# Despues de ejecutar el comando nos pedira una ruta donde guardar la llave
# Despues nos pedira una contraseña para la llave
# Despues nos pedira confirmar la contraseña
# Despues nos mostrara la ruta donde se guardo la llave
```

```sh
eval $(ssh-agent -s) # Nos sirve para iniciar el agente SSH
ssh-add ~/.ssh/id_rsa # Nos sirve para agregar la llave SSH esta es la llave privada
```

# Conectando con GitHub

- Ingresamos a la siguiente [Ruta](https://github.com/settings/keys)
  ![](../../img/github/SSH%20GitHub.png)

## Extenciones de interes para Visual Studio Code

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) para ver los cambios que se han hecho en los archivos
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) para ver el grafo de los commits
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) para ver el historial de los commits
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame) para ver quien hizo los cambios en el archivo
