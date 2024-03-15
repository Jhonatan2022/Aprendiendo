const hello = (name, myCallback) => {
  setTimeout(() => {
    console.log(`hello ${name}`)
    myCallback(name)
  }, 1000)
}

const goodbye = (name, anotherCallback) => {
  setTimeout(() => {
    console.log(`goodbye ${name}`)
    anotherCallback()
  }, 1000)
}

console.log('starting process')
hello('Miguel', (name) => {
  goodbye(name, () => {
    console.log('finishing process')
  })
})
