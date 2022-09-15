const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]
const idade = usuarios.filter((maiores) => {
    return maiores.idade > 18
})
const habilitados = idade.every((carteira) => {
    return carteira.habilitado === true
})
habilitados === false ? console.log("todos precisam estar habilitados") : console.log("`todos passaram no teste`")