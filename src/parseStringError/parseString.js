export class EmptyStringError extends Error {}
export class InvalidCharacterError extends Error {}

export function parseString(str) {
  if (str.trim() === '') {
    throw new EmptyStringError('The string cannot be empty.');
  }

  const parsedInt = parseInt(str, 10);
  if (isNaN(parsedInt)) {
    throw new InvalidCharacterError('The string contains invalid characters.');
  }

  return parsedInt === -0 ? 0 : parsedInt;
}
