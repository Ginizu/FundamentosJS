let number = prompt("Digite um número qualquer:")
let result = ""

for (let i = 1; i <=20; i++) {
    result += "-> " + number + " x " + i + " = " + (number * i) + "\n"

}

alert("Resultado da tabuada:" + "\n" +  result)