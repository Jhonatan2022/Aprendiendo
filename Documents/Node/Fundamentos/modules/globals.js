// console.log(global);

let i = 0
let intervalo = setInterval(function () {
  console.log('Hola ' + i)
  if (i === 3) {
    clearInterval(intervalo)
  }
  i++
}, 1000)

// Inmmediate -> Se ejecuta antes que cualquier cosa
setImmediate(function () {
  console.log('Hola inmediato')
})

// Mostramos la direccion del archivo
console.log(__filename)
