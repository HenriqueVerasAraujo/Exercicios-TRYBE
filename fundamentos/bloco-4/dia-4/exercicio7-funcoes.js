// function verificaFimPalavra(palavra, fimPalavra) {
//     palavra = palavra.split('');
//     fimPalavra = fimPalavra.split('');
//     controle = true;
//     for (let index = 0; index < fimPalavra.length; index += 1) {
//       if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//         controle = false;
//       }
//     }
//     return controle;
// }


function fimDaPalavra(wordI, wordEnd) {
    let wordIReverse = wordI.split("").reverse().join("");
    let wordEndReverse = wordEnd.split("").reverse().join("");
    let resultado = true;
    for (let index = 0; index < wordEnd.length; index += 1) {
        if(wordIReverse[index] !== wordEndReverse[index]){
        resultado = false;
        break;
         }else{
            resultado = true
        }
    }
    return resultado
}

console.log(fimDaPalavra("trybe","beW"))