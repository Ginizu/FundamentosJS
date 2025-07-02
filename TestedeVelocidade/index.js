const car1 = prompt("Nomeie o primeiro carro:")
const speed1 = parseFloat(prompt("Qual sua velocidade?"))
const car2 = prompt("Nomeie o segundo carro:")
const speed2 = parseFloat(prompt("Qual sua velocidade?"))

if (speed1 > speed2) {
    alert("A velocidade de\n" + car1 + "é maior que " + car2)
} else if (speed1 < speed2) {
    alert("A velocidade de\n" + car2 + "\né maior que " + car1)
} else {
    alert("A velocidade de\n" + car1 + "\né a mesma que " + car2)
}
