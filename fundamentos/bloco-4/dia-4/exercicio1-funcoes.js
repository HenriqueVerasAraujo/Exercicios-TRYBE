// function palindromo(palavra) {
//     for (let index = 0; index < palavra.length; index += 1)
//     let letraAtual1 = (palavra[index]);
//     for (let index1 = -1; index1 < -palavra.length; index -= 1) {

//     }
// }
// let teste1 = "javali"

// palindromo(teste1);

function palindromo(palavra) {
    let palavraReverse = palavra.split("").reverse().join("")
    if (palavra === palavraReverse) {
        console.log("A palavra é um palindromo");
    }else{
        console.log("A palavra não é um palindromo")
    }
}

palindromo("javali")
palindromo("arara")