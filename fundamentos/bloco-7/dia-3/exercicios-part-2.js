// EXERCÍCIO 1:

// const assert = require('assert');

// // function addOne(x) {
// //     let newArray = x
// //     for (let index in newArray) {
// //        newArray[index] += 1;
// //     }
// //     return newArray;
// // };
// // let newArray = [];
// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);
// // console.log(myArray);

// function addOne(x) {
//     let newArray = []
//     for (let index = 0; index < x.length; index += 1) {
//        newArray.push(x[index] + 1);
//     }
//     return newArray;
// };
// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// EXERCÍCIO 2:Escreva a função wordLengths para passar nos testes já implementados.

// const assert = require('assert');

// function wordLengths(x) {
//     let arrayOfLength = [];
//     for (let index = 0; index < x.length; index += 1) {
//         let wordLength = x[index].length;
//         arrayOfLength.push(wordLength);
//     }
//     return arrayOfLength;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// EXERCÍCIO 3: Escreva a função sumAllNumbers para passar nos testes já implementados.

// const assert = require('assert');

// function sumAllNumbers(array) {
//     let sum = 0;
//     for (let index = 0; index < array.length; index += 1) {
//         sum += array[index];
//     }
//     return sum;
// }
// const numbers = [10, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);