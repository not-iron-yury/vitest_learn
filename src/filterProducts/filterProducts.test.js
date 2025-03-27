import { describe, expect, it } from 'vitest';
import { filterProducts } from './filterProducts';

describe('Возвращает отфильтрованный список товаров', () => {
  const products = [
    {
      id: 1,
      title: 'Малина',
      price: 10,
    },
    {
      id: 2,
      title: 'Клубника',
      price: 20,
    },
    {
      id: 3,
      title: 'Бананы',
      price: 30,
    },
  ];

  describe('Фильтрация по названию и ценовому диапазону', () => {
    it('Возвращает продукт, соответствующий как названию, так и ценовому диапазону', () => {
      const filters = {
        title: 'Клубника',
        minPrice: 15,
        maxPrice: 25,
      };
      expect(filterProducts(products, filters)).toEqual([products[1]]);
    });

    it('Возвращает товар, соответствующий точной цене', () => {
      const filters = {
        title: 'Малина',
        minPrice: 10,
        maxPrice: 10,
      };
      expect(filterProducts(products, filters)).toEqual([products[0]]);
    });
    it('Возвращает все товары в пределах ценового диапазона', () => {
      const filters = {
        minPrice: 15,
        maxPrice: 35,
      };
      expect(filterProducts(products, filters)).toEqual([products[1], products[2]]);
    });
  });

  describe('Фильтрация по частичным данным', () => {
    it('Возвращает все товары по частично написанному названию', () => {
      const filters = {
        title: 'на',
      };
      expect(filterProducts(products, filters)).toEqual([products[0], products[2]]);
    });

    it('Возвращает все продукты, если данные для фильтрации не предоставлены', () => {
      expect(filterProducts(products, {})).toEqual(products);
    });

    it('Возвращает продукт по ценовому диапазону', () => {
      const filter = {
        minPrice: 15,
        maxPrice: 25,
      };
      expect(filterProducts(products, filter)).toEqual([products[1]]);
    });

    it('Возвращает продукт по названию', () => {
      const filter = {
        title: 'Бананы',
      };
      expect(filterProducts(products, filter)).toEqual([products[2]]);
    });
  });

  describe('Фильтрация по неправильным данным', () => {
    it('Возвращает пустой массив, из-за несоответствия цены искомого товара', () => {
      const filters = {
        title: 'Клубника',
        minPrice: 45,
        maxPrice: 55,
      };
      expect(filterProducts(products, filters)).toEqual([]);
    });

    it('Возвращает пустой массив, т.к. минимальная цена больше максимальной', () => {
      const filters = {
        title: 'Клубника',
        minPrice: 145,
        maxPrice: 55,
      };
      expect(filterProducts(products, filters)).toEqual([]);
    });

    it('Возвращает пустой массив, т.к. товар отсутствует в массиве', () => {
      const filters = {
        title: 'Петрушка',
      };
      expect(filterProducts(products, filters)).toEqual([]);
    });

    it('Возвращает пустой массив, если массив с товарами не имеет данных (пустой)', () => {
      expect(filterProducts([], {})).toEqual([]);
    });
  });
});
