// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// numbers.sort(function(a,b){return a-b})
// console.log(numbers[numbers.length -1])

// ou

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    } else{}
}
console.log(maiorValor)
