const os = require('os')

// Mostramos la arquitectura del sistema
console.log(os.arch())
console.log(os.platform())
console.log(os.cpus().length + ' Nucleos')

// Mostramos la memoria ram en gigas
// console.log(os.freemem() / 1024 / 1024 / 1024);

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())
