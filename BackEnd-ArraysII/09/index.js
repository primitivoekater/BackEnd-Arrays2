const numeros = [10, 987, -886, 0, 12, 199, -45, -67]
const resultado = numeros.filter((positivos) => {
    return positivos > 0
})
console.log(resultado)