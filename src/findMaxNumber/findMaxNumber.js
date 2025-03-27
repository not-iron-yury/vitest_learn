export function findMaxNumber(numbers) {
  if (!numbers || !numbers.length) {
    return undefined;
  }

  return Math.max(...numbers);
}
