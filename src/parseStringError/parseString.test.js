import { describe, expect, it } from 'vitest';
import { parseString, EmptyStringError, InvalidCharacterError } from './parseString';

function generateTestsForNumbers() {
  const numbers = ['123', '-123', '0', '-0', '123abc', '-123abc', '0abc'];
  const expectedResults = [123, -123, 0, 0, 123, -123, 0];

  describe('Parsing numbers', () => {
    numbers.forEach((number, index) => {
      it(`В строке ${number} парсим ${expectedResults[index]}`, () => {
        expect(parseString(number)).toBe(expectedResults[index]);
      });
    });
  });
}

describe('Преобразование строки в целое число', () => {
  // // Стандартные случаи (с параметризованными тестами)
  // describe.each([
  //   ['123', 123, 'positive'],
  //   ['-123', -123, 'negative'],
  //   ['0', 0, 'zero'],
  //   ['-0', 0, 'negative zero'],
  //   ['123abc', 123, 'positive'],
  //   ['-123abc', -123, 'negative'],
  //   ['0abc', 0, 'zero'],
  // ])('В строке "%s" должен спарсить %d (%s)', (input, expected) => {
  //   it(`parses ${input}`, () => {
  //     expect(parseString(input)).toBe(expected);
  //   });
  // });

  generateTestsForNumbers();

  // Индивидуальные тесты для исключений
  describe('Исключения', () => {
    it('Передана пустая строка', () => {
      expect(() => parseString('  ')).toThrowError(EmptyStringError);
      expect(() => parseString('')).toThrowError(EmptyStringError);
    });
    it('Передана строка, которая не может быть перобразована в число', () => {
      expect(() => parseString('abc123')).toThrow(InvalidCharacterError);
      expect(() => parseString('abc')).toThrowError(InvalidCharacterError);
      expect(() => parseString('!%№')).toThrowError(InvalidCharacterError);
    });
  });
});
