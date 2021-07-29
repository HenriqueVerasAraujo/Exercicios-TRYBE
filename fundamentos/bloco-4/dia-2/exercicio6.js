let numbers = [8, 10, 3, 20, 70, 8, 100, 2, 32, 28];
let numerosImpares = []
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
    numerosImpares.push(numbers[index]);   
    }
}
console.log(numerosImpares)
if (numerosImpares =) {
    console.log("Nenhum valor ímpar encontrado")
} else{
    console.log(numerosImpares);
    console.log(numerosImpares.length + " número(s) ímpar(es) encontrado(s)");
}