// const fs = require ('fs');

// function leer(ruta, cb) {
//     fs.readFile(ruta, (err, data) => {
//         console.log(data.toString());
//     })
// }

// function escribir(ruta, contenido, cb) {
//     fs.writeFile(ruta, contenido, function(err) {
//         if (err) {
//             console.error('No he podido escribirlo', err);
//         } else {
//             console.log('Se ha escrito correctamente');
//         }
//     })
// }

// function borrar(ruta, cb) {
//     fs.unlink(ruta, cb);
// }

//leer(__dirname + '/g.txt', console.log)
//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo fino...', console.log)
//borrar(__dirname + '/archivo1.txt', console.log)

var tabla = [
  {
    a: 1,
    b: 'Z',
    name: 'Zeta',
    edad: 20,
    direccion: {
      calle: 'Calle 1',
      numero: 1
    }
  }
]

console.table(tabla)

// console.group('Conversacion');
// console.log('Hola');
// console.group('Bla');
// console.log('Blablabla');
// console.log('Blablabla');
// console.groupEnd('Bla');
// console.log('Mundo');
// console.log('Adios');
// console.groupEnd('Conversacion');

function f1() {
  console.group('f1')
  console.log('Esto es de f1')
  console.log('Esto tambien')
  f2()
  console.log('Volvemos a f1')
  console.groupEnd('f1')
}

function f2() {
  console.group('f2')
  console.log('Esto es de f2')
  console.groupEnd('f2')
}

console.log('Empezamos')
f1()

console.count()
console.count()
console.count()
console.countReset()
console.count()
