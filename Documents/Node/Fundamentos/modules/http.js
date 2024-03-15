const http = require('http')

http.createServer(router).listen(8080)

function router(req, res) {
  console.log('Escuchando el puerto 8080')
  console.log(req.url)

  switch (req.url) {
    case '/':
      res.write('Home')
      res.end()
      break

    case '/hola':
      res.write('Hola, que tal')
      res.end()
      break

    default:
      res.write('Error 404: No se lo que quieres')
      res.end()
  }

  // res.writeHead(201, {'Content-Type': 'application/json'});

  // // Escribimos la respuesta del servidor
  // res.write('Hola Mundo');

  // res.end();
}

// Mostramso por consola el puerto en el que se esta escuchando
console.log('Escuchando el puerto 8080')
