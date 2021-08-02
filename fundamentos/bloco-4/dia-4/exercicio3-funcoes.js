let arrayTeste = [2, 4, 6, 7, 10, 0, -3]


function maiorNumeroIndex(array) {
    let maiorNumero = array[0];
    let maiorNumeroPosição = 0;
    // for (let index = 0; index < array.length; index += 1) {
    for (let index in array) {
        if (array[index] < maiorNumero){
            maiorNumero = array[index];
            maiorNumeroPosição = index; 
        }    
    }
    return maiorNumeroPosição;
}
console.log(maiorNumeroIndex(arrayTeste));