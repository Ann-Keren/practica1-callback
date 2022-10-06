//promise --3metodos. 1 then(entonces)una vez que s cumple el descueto --2catch hubo un error al aplicarlo y q no cumple la promesa 3--file
//ayuda a completar una promesa
//1-fulfilled 2--rejected
//pendiente

/*const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('Descuento se ha aplicado')
    } else {
        reject('No se pudo aplicar el descuento')
    }
})
aplicarDescuento.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})

console.log(aplicarDescuento)*/

//callback to promise 

const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado: ${pais}`)
    }, 3000)
})

nuevoPais('Mexico').then(resultado => {
        console.log(resultado) //se agrego el pais mexico
        console.log(paises) //enseñarme el arreglo con mexico
        return nuevoPais('EUA')
    })
    .then(resultado => {
        console.log(resultado) //se agrego eua
        console.log(paises) //mexico y eua
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado) //se agrego francia
        console.log(paises) //mexico,eua y francia
    })