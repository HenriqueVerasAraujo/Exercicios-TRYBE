let arrayTeste = [2, 3, 6, 7, 10, 1]


function maiorNumeroIndex(array) {
    let maiorNumero = 0;
    let maiorNumeroPosição = 0;
    // for (let index = 0; index < array.length; index += 1) {
    for (let index in array) {
        if (array[index] > maiorNumero){
            maiorNumero = array[index];
            maiorNumeroPosição = index; 
        }    
    }
    return maiorNumeroPosição;
}
console.log(maiorNumeroIndex(arrayTeste));