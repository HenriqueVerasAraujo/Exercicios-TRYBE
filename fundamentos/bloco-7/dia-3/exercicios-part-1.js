// EXERCÍCIO 1:
// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // 1.1
// assert.strictEqual(sum(4, 5), 9);
// // 1.2
// assert.strictEqual(sum(0, 0), 0);
// // 1.3
// assert.throws(() => sum(4, '5'));
// // 1.4
// assert.throws(() => {
//     sum(4, '5');
// },/^Error: parameters must be numbers$/);


// EXERCÍCIO 2:
// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// // 2.1
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// // 2.2
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);



// EXERCÍCIO 3
// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// // 3.1
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// // 3.2
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// // 3.3
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4]), [1, 2, 3, 4]);
// // 3.4
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);


// EXERCÍCIO 4:
// const { strictEqual } = require('assert');
// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // 4.1
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// // 4.2
// assert.strictEqual(myFizzBuzz(9), 'fizz');
// // 4.3
// assert.strictEqual(myFizzBuzz(10), 'buzz');
// // 4.4
// assert.strictEqual(myFizzBuzz(11), 11);
// // 4.5
// assert.strictEqual(myFizzBuzz('11'), false);

// EXERCÍCIO 5: Compare dois objetos para verificar se são idênticos ou não.

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// function objCompare(a, b) {
//     if (a === b) {
//         return true
//     } else {
//         return false new Error("Os objetos não são iguais.")
//     }
// }
assert.deepStrictEqual(obj2, obj3);

