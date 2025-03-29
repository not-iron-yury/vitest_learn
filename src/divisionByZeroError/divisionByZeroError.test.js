import { describe, expect, it } from 'vitest';
import { DivisionByZeroError, divide } from './divisionByZeroError';

describe('Деление двух чисел', () => {
  describe('Стандартные случаи', () => {
    it('Деление положительных чисел', () => {
      expect(divide(10, 5)).toBe(2);
    });
    it('Деление положительных чисел с плавающей точкой', () => {
      expect(divide(10.2, 5.3)).toBeCloseTo(1.9245, 4);
    });
    it('Деление отрицательных чисел', () => {
      expect(divide(-10, -5)).toBe(2);
    });
    it('Деление отрицательных чисел с плавающей точкой', () => {
      expect(divide(-10.2, -5.3)).toBeCloseTo(1.9245, 4);
    });
    it('Деление чисел положительное на отрицательное', () => {
      expect(divide(10, -5)).toBe(-2);
    });
    it('Деление чисел отрицательное на положительное', () => {
      expect(divide(-10, 5)).toBe(-2);
    });
    it('Деление нуля на число', () => {
      expect(divide(0, 5)).toBe(0);
    });
  });

  describe('Нестандартные случаи', () => {
    it('При делении на ноль выдает ошибку DivisionByZeroError', () => {
      expect(() => divide(10, 0)).toThrowError(DivisionByZeroError);
    });

    it('При делении на ноль выдает конкретное сообщение', () => {
      expect(() => divide(10, 0)).toThrowError('Cannot divide by zero.');
    });
  });
});
