let arr = ["Ana", " Bruno", " Carla", " Diego", " Eduardo", " Fernanda", " Gabriel", " Helena", ]
let menu = parseFloat(prompt("Bem-vindo ao menu, o que deseja fazer?\n" +
    "Pacientes em espera:\n" + arr +
    "\n 1 - Registrar novo paciente" +
    "\n 2 - Consultar Paciente" +
    "\n 3 - Sair"))

if (menu === 1) {
    const name = prompt("Qual o nome do novo paciente que deseja incluir?")
    arr.push = name
    alert("Agora " + name + " foi incluído a fila.\n")
    console.log(arr)
} else if (menu === 2) {
    let out = arr.shift()
    alert(out + " foi consultado.")
} else if (menu === 3) {
    alert("Encerrando...")
}
