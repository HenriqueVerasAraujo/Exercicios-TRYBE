// EXERCÍCIO 1:

// const factorial = (n) => {
//     let factorialNumber = 1
//     if (n === 0) {
//         return 1;
//     } else {
//         for (let index = 1; index <= n; index += 1) {
//          factorialNumber *= index;
//         }
//     }
//     return factorialNumber;
// }
// console.log(factorial(20));

// EXERCÍCIO 2: 
// const longestWord = string => {
//     const newArray = string.split(' ').sort((a, b) => a.length - b.length);
//     console.log(newArray[newArray.length - 1]);  
// }
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

// EXERCÍCIO 3:
// let button = document.getElementById('button');
// let numberOfClicks = 0
// button.addEventListener('click', () => button.innerText = numberOfClicks += 1);