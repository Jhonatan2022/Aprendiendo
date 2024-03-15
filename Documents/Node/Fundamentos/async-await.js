async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Hello, ' + nombre)
      resolve(nombre)
    }, 1000)
  })
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla, bla, bla, bla')
      resolve(nombre)
      //reject("Error");
    }, 1000)
  })
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios', nombre)
      resolve()
    }, 1000)
  })
}

async function main() {
  let nombre = await hola('Juan')
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('Terminado el proceso')
}

console.log('Primera instrución')
main()
console.log('Segunda instrución')
