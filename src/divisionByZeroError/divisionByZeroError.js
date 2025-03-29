export class DivisionByZeroError extends Error {}

export function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new DivisionByZeroError('Cannot divide by zero.');
  }
  return dividend / divisor;
}
