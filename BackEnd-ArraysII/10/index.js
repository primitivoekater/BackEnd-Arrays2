const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]
const resultado = numeros.filter((pares) => {
    return pares % 2 === 0
})
console.log(resultado)