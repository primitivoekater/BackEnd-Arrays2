const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
const tamanho = cidades.filter((caracteres) => {
    return caracteres.length <= 8
})
console.log(tamanho)