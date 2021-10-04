
const myRemove = require('./removeArray.js');

test('Testa a função myRemove, que remove elementos do Array', () => {
    expect(myRemove([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
});