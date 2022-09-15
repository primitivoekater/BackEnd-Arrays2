const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]
const resultado = nomes.filter((A) => {
    return A[0] === "a" || A[0] === "A"
})
console.log(resultado)