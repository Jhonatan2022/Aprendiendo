function otraF() {
  console.log('Inicia otraF')
  serompe()
}

function serompe() {
  setTimeout(function () {
    try {
      return 3 + z
    } catch (error) {
      console.error('ERROR ==> ' + error.message)
    }
  })
  console.log('Error asincrono')
}

otraF()
