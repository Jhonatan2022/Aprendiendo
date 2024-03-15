// Creamos una variable que recibiría el valor de la variable de entorno
// Si no existe la variable de entorno, le asignamos un valor por defecto
let nombre = process.env.NOMBRE || 'Sin nombre'
let web = process.env.WEB || 'No tengo web'

console.log('Hola ' + nombre + '\nTu web es: ' + web)
console.log('Hola a todos esto esta corriendo con nodemon')

// Para ejecutar este archivo, en la terminal escribimos: NOMBRE=Juan node variables\ de\ entorno.js
