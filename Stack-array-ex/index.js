let arr = [ "Ás de Copas", "2 de Copas", "3 de Copas", "4 de Copas", "5 de Copas", "6 de Copas",
"7 de Copas", "8 de Copas", "9 de Copas",  "10 de Copas", "Valete de Copas", "Dama de Copas", "Rei de Copas"]
let cards = ""

do {
    cards = prompt("Baralho Interativo - Contém: " + arr.length + " cartas, escolha uma das opções: \n" +
"1 - Adicionar uma carta \n" +
"2 - Puxar uma carta \n" + 
"3 - Sair")
switch (cards) {
    case "1":
        let addCard = prompt("Qual carta deseja adicionar?")
        arr.unshift(addCard)
        alert(addCard + " foi adionado no topo do baralho")
    break
    case "2":
        let removeCard = arr.shift()
        alert(removeCard + " foi removido do baralho")
    break
    case "3":
        alert("Encerrando...")
    break
}

} while (cards !=="3")