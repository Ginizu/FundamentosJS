const word = prompt("Informe uma palavra")
let invert = ""

for (let i = word.length - 1; i >= 0; i--) {
    invert += word[i]
}

if (word === invert) {
    alert (word + " é um palindromo")
} else {
    alert(word + " não é um palindromo \n" +
        word + " !== " + invert
    )
}