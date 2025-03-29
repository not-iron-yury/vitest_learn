export function calculateStatistics(numbers) {
  if (!numbers || !numbers.length) {
    return {
      average: undefined,
      median: undefined,
      min: undefined,
      max: undefined,
    };
  }

  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

  const middleIndex = Math.floor(sortedNumbers.length / 2);
  const median =
    sortedNumbers.length % 2 !== 0
      ? sortedNumbers[middleIndex]
      : (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;

  const min = sortedNumbers[0];
  const max = sortedNumbers[sortedNumbers.length - 1];

  return {
    average,
    median,
    min,
    max,
  };
}
