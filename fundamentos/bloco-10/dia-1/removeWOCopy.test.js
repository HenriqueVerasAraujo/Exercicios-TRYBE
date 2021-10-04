const myRemoveWithoutCopy = require('./removeWOCopy.js');

test('Função que remove sem clonar o array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4]);
})