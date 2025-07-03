let money = 0
let remove = 0
let option = "3"

do {
    option = prompt("Escolha uma opção: \n" +
        "1. Adicionar lançamento \n" +
        "2. Remover lançamento \n" +
        "3. Encerrar \n"
    )

    switch (option) {
        case "1":
            money = parseFloat(prompt("Qual o valor que deseja acrescentar?"))
            alert("O valor agora é de R$" + money)
            break
        case "2":
            remove = parseFloat(prompt("Qual valor deseja remover?"))
            money  -= remove
            alert("O valor agora é de R$" + money)
            break
        case "3":
            alert("O sistema irá encerrar...")
            break
        default:
            alert ("Opção Invalida")
    }

} while (option !== "3")