import { describe, expect, it } from 'vitest';
import { calculateDiscount } from './calculateDiscount';

describe('Расчет скидки', () => {
  describe('Cистемы лояльности', () => {
    it('platinum', () => {
      expect(calculateDiscount(1000, 'platinum')).toBe(200);
    });
    it('gold', () => {
      expect(calculateDiscount(1000, 'gold')).toBe(150);
    });
    it('silver', () => {
      expect(calculateDiscount(1000, 'silver')).toBe(100);
    });
  });

  describe('Суммы покупок', () => {
    describe('Целые числа', () => {
      it('Целое число platinum', () => {
        expect(calculateDiscount(5555, 'platinum')).toBe(1111);
      });
      it('Целое число gold', () => {
        expect(calculateDiscount(5555, 'gold')).toBe(833.25);
      });
      it('Целое число silver', () => {
        expect(calculateDiscount(5555, 'silver')).toBe(555.5);
      });
    });

    describe('Числа с плавающей точкой', () => {
      it('Число с плавающей точкой platinum', () => {
        expect(calculateDiscount(7745.62, 'platinum')).toBeCloseTo(1549.12, 2);
      });
      it('Число с плавающей точкой gold', () => {
        expect(calculateDiscount(7745.62, 'gold')).toBeCloseTo(1161.84, 2);
      });
      it('Число с плавающей точкой silver', () => {
        expect(calculateDiscount(7745.62, 'silver')).toBeCloseTo(774.56, 2);
      });
    });
  });

  describe('Не стандартные случаи', () => {
    it('Сумма покупки равна 0', () => {
      expect(calculateDiscount(0, 'platinum')).toBe(0);
      expect(calculateDiscount(0, 'gold')).toBe(0);
      expect(calculateDiscount(0, 'silver')).toBe(0);
    });

    it('Ложное значение уровня лояльности', () => {
      expect(calculateDiscount(1000, 'red')).toBe(0);
    });

    it('Отрицательная сумма покупки', () => {
      expect(calculateDiscount(-500, 'platinum')).toBe(0);
      expect(calculateDiscount(-500, 'gold')).toBe(0);
      expect(calculateDiscount(-500, 'silver')).toBe(0);
    });

    it('Отсутствующее значение уровня лояльности', () => {
      expect(calculateDiscount(1000, '')).toBe(0);
      expect(calculateDiscount(1000, undefined)).toBe(0);
    });
  });
});
