const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('sum of two values', () => {
    expect(sum(4,7)).toEqual(11);
})