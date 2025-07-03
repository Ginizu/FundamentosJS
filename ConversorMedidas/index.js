let value = parseFloat(prompt("Qual valor em metros que deseja converter?"))
const unit = prompt("Escolha a medida: mm;cm;dm;dam;hm;km;")

switch (unit) {
    case "mm":
        result = value * 1000
        alert("O resultado é " + result + unit)
        break 
    case "cm":
        result = value * 100
        alert("O resultado é " + result + unit)
        break
    case "dm":
        result = value * 10
        alert("O resultado é " + result + unit)
        break
    case "dam":
        result = value / 10
        alert ("O resultado é " + result + unit)
        break
    case "hm":
        result = value / 100
        alert ("O resultado é " + result + unit)
        break
    case "km":
        result = value / 1000
        alert("O resultado é " + result + unit)
        break
    default:
        alert("Opção Inválida")
}