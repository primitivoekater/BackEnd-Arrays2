const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]
let contador = 0
const resultado = frutas.map((fruto) => {
    fruto = fruto.toLowerCase()
    fruto[0] = fruto.toUpperCase()
    contador++
    return (`${contador}- ${fruto}`)
})
console.log(resultado)