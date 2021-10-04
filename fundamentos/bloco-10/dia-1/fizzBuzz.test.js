const myFizzBuzz = require('./fizzBuzz.js');

test('testa a função fizzBuzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
});
