function hola(nombre, micallback) {
  setTimeout(function () {
    console.log('Hello, ' + nombre)
    micallback(nombre)
  }, 1000)
}
function hablar(callbackhablar) {
  setTimeout(function () {
    console.log('bla, bla, bla, bla')
    callbackhablar()
  }, 1000)
}
function adios(nombre, otrocallback) {
  setTimeout(function () {
    console.log('Adios', nombre)
    otrocallback()
  }, 1000)
}

function conversacion(nombre, veces, callback) {
  if (veces >= 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback)
    })
  } else {
    adios(nombre, callback)
  }
}

console.log('iniciando')
hola('brando', function (nombre) {
  conversacion(nombre, 2, function () {
    console.log('proceso terminado')
  })
})

// Callback hell
// hello('Miguel', (name) => {
//     talk(() => {
//         talk(() => {
//             talk(() => {
//                 goodbye(name, () => {
//                     console.log('finishing process')
//                 })
//             })
//         })
//     })
//   })
