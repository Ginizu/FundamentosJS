let options = ""

do {
    options = prompt("Escolha uma opção: \n" 
        + "1. Opção \n" 
        + "2. Opção \n"
        + "3. Opção \n"
        + "4. Opção \n"
        + "5. Encerrar \n")

    switch (options) {
    case "1":
        alert("A opção escolhida foi a 1")
        break
    case "2":
        alert("A opção escolhida foi a 2")
        break
    case "3":
        alert("A opção escolhida foi a 3")
        break
    case "4":
        alert("A opção escolhida foi a 4")
        break
    case "5":
        alert("Encerrando...")
        break
    default:
        alert ("Opção Invalida")
    }

    } while (options !== "5")