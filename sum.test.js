const sum = require('./sum');

// this matched exact equality
// toBe uses Object.is to test exact equality
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// for objects
// toEqual recursively checks every field of an object or array.
test('object assignment', () => {
  const data = {
    one: 1,
  };
  data['two'] = 2;
  expect(data).toEqual({
    one: 1,
    two: 2,
  });
});
