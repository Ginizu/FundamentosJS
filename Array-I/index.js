const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar elementos com a função push:
//Coloca elemento no final da fila.

arr.push("Boromir")
arr.push("Boromir")
arr.push("Boromir")
console.log(arr)

// Qual a serventia? Saber o indice do elemento que estamos trabalhando.
// Permite que insira elementos de forma previsivel.

//Unshift 
//adiciona no começo do array

arr.unshift("Boromir")
console.log(arr)

//Pop
//Remove um elemeto no final do array

arr.pop("Boromir")
console.log(arr)
arr.pop("Boromir")
console.log(arr)
arr.pop("Boromir")
console.log(arr)

//Devolve o elemnto que foi removido

let lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

// Shift
//Remove elemento no começo do array]

lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

//Includes
//Pesquisar um elemento
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf
//qual o indice do elemento
const indice = arr.indexOf("Merry")
console.log(indice)

//Slice
//Cortar e Concatenar
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-3)
console.log(arr)
console.log(hobbits)
console.log(outros)