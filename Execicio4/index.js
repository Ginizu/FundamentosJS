const name = prompt("Diga seu nome:")
let question = prompt("Já visitou alguma cidade?(Sim/Não)")
let city = ""
let numCity = 0

while (question === "Sim") {
    let cities = prompt("Qual foi a cidade visitada?")
    city += " - " + cities + "\n"
    numCity++
    question = prompt("Já visitou alguma outra cidade?(Sim/Não)")
}

alert("Turista: " + name + "\njá visitou: \nG" + city + "\n N° cidades: " + numCity)