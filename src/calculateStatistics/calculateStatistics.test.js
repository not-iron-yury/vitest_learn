import { describe, expect, it } from 'vitest';
import { calculateStatistics } from './calculateStatistics';

describe('Вычисление статистик массива', () => {
  describe('Свойства возвращаемого объекта', () => {
    it('Проверка количества свойств возвращаемого объекта', () => {
      const keys = Object.keys(calculateStatistics([1, 2, 3, 4, 5]));

      expect(keys.length).toBe(4);
    });

    it('Проверка имен свойств возвращаемого объекта', () => {
      const res = calculateStatistics([1, 2, 3, 4, 5]);

      expect(res).haveOwnProperty('average');
      expect(res).haveOwnProperty('median');
      expect(res).haveOwnProperty('min');
      expect(res).haveOwnProperty('max');
    });
  });

  describe('Массив положительных целых чисел', () => {
    it('Массив положительных упорядоченных чисел', () => {
      const input = [1, 2, 3, 4, 5];
      const output = { average: 3, median: 3, min: 1, max: 5 };

      expect(calculateStatistics(input)).toEqual(output);
    });
    it('Массив положительных не упорядоченных чисел', () => {
      const input = [11, 2, 7, 4, 5];
      const output = { average: 5.8, median: 5, min: 2, max: 11 };

      expect(calculateStatistics(input)).toEqual(output);
    });
  });

  describe('Массив отрицательных целых чисел', () => {
    it('Массив положительных упорядоченных чисел', () => {
      const input = [-1, -2, -3, -4, -5];
      const output = { average: -3, median: -3, min: -5, max: -1 };

      expect(calculateStatistics(input)).toEqual(output);
    });
    it('Массив положительных не упорядоченных чисел', () => {
      const input = [-11, -2, -7, -4, -5];
      const output = { average: -5.8, median: -5, min: -11, max: -2 };

      expect(calculateStatistics(input)).toEqual(output);
    });
  });

  describe('Массив чисел с плавающей точкой', () => {
    it('Массив положительных чисел с плавающей точкой', () => {
      const input = [0.1, 2.2, 1.3, 7.4, 5.6];
      const output = { average: 3.3200000000000003, median: 2.2, min: 0.1, max: 7.4 };

      expect(calculateStatistics(input).average).toBeCloseTo(output.average, 5);
      expect(calculateStatistics(input).median).toBe(output.median);
      expect(calculateStatistics(input).min).toBe(output.min);
      expect(calculateStatistics(input).max).toBe(output.max);
    });
    it('Массив отрицательных чисел с плавающей точкой', () => {
      const input = [-0.1, -2.2, -1.3, -7.4, -5.6];
      const output = { average: -3.32, median: -2.2, min: -7.4, max: -0.1 };

      expect(calculateStatistics(input).average).toBeCloseTo(output.average, 4);
      expect(calculateStatistics(input).median).toBe(output.median);
      expect(calculateStatistics(input).min).toBe(output.min);
      expect(calculateStatistics(input).max).toBe(output.max);
    });
  });

  describe('Не стандартные случаи', () => {
    it('Пустой массив', () => {
      const input = [];
      const output = { average: undefined, median: undefined, min: undefined, max: undefined };

      expect(calculateStatistics(input)).toEqual(output);
    });

    it('Массив повторяющихся нулей', () => {
      const input = [0, 0, 0, 0, 0, 0];
      const output = { average: 0, median: 0, min: 0, max: 0 };

      expect(calculateStatistics(input)).toEqual(output);
    });

    it('Массив с одним значением', () => {
      const input = [4];
      const output = { average: 4, median: 4, min: 4, max: 4 };

      expect(calculateStatistics(input)).toEqual(output);
    });

    it('Массив с нулем и отрицательным значениме', () => {
      const input = [-1, 0, 1];
      const output = { average: 0, median: 0, min: -1, max: 1 };
      expect(calculateStatistics(input)).toEqual(output);
    });
  });
});
