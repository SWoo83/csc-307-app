function sum(a, b) {
  return a + b;
}

function containsNumbers(text) {
  return /\d/.test(text);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

export default { sum, containsNumbers, divide };
