let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;
for (index = 0; index < numbers.length; index += 1){
    somaTotal = somaTotal + numbers[index];
}
if (somaTotal / numbers.length) {
    console.log("Valor maior que 20");
} else{
    console.log("valor menor que 20");
}