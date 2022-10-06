//const paises = ['Francia', 'España', 'Portugal', 'Mexico', 'Argentina']
//async(

const paises = []

function nuevoPais(pais, callback) {
    //setTimeout(() => {
    paises.push(pais)
    console.log(`Agregando: ${pais}`)
    callback()
        //   }, )
}

function mostrarPaises() {
    // setTimeout(() => {
    //   paises.forEach(pais => {
    console.log(paises)
        // })
        //}, 2000)
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Mexico', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Francia', mostrarPaises)
            }, 3000)
        }, 3000)
    }, 3000)
}
iniciarCallbackHell()
    //mostrarPaises()
    //nuevoPais('Alemania', mostrarPaises)