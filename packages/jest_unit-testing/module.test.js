import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = true;
  const got = mut.containsNumbers("Hello123");
  expect(got).toBe(expected);
});

test('Testing divide -- success', () => {
  const expected = 2;
  const got = mut.divide(6, 3);
  expect(got).toBe(expected);
});

test('Testing divide -- division by zero', () => {
  expect(() => {
    mut.divide(6, 0);
  }).toThrow("Division by zero is not allowed.");
});