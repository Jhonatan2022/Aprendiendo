function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Hello, ' + nombre)
      resolve(nombre)
    }, 1000)
  })
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla, bla, bla, bla')
      // resolve(nombre);
      reject('Error')
    }, 1000)
  })
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios', nombre)
      resolve()
    }, 1000)
  })
}

console.log('iniciando')
hola('Juan')
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminado el proceso')
  })
  .catch((error) => {
    console.error('Ha ocurrido un error:', error)
  })
