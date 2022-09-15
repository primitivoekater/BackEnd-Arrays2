const palavras = ["livro", "caneta", "sol", "carro", "orelha"]
const palavrasChecadas = palavras.some((item) => {
    return item.length > 5

})
if (palavrasChecadas === true) {
    console.log("existe palavra inválida")
} else console.log("array valido")