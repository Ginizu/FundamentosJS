const character1 = prompt ("Qual o nome de seu personagem?")
let attack = parseFloat(prompt("Qual o seu poder de ataque?"))
let life = parseFloat(prompt("Qual sua vida?"))
const character2 = "Inimigo"
let defense = parseFloat(prompt("Qual o poder de defesa do inimigo?"))
const shield = prompt("Possuí escudo?")

let damage = 0

if (attack > defense && shield === "Não") {
    damage = attack - defense
} else if (attack > defense && shield === "Sim") {
    damage = (attack - defense) / 2
} 

life -= damage

alert(character1 + " causou " + damage + " pontos de dano em " + character2)
alert(
  character1 + "\nPoder de ataque: " + attack + "\n\n" +
  character2 + "\nPontos de vida: " + life +
  "\nPoder de defesa: " + defense + "\nPossui escudo: " + shield
)
