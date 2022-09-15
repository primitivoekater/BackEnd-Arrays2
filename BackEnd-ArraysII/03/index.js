const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]
const palavrasChecadas = palavras.some((item) => {
    if (item == "cerveja" || item == "vodka") {
        return true
    }

})
if (palavrasChecadas === true) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!")
} else console.log("tudo certo, vamos as compras!")