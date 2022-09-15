const numeros = [0, 122, 4, 6, 7, 8, 44]
const resultado = numeros.every((elementoatual) => {
    return elementoatual % 2 === 0
})
if (resultado === false) {
    console.log("array invalido")
} else console.log("array valido")