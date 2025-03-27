// --------------- vitest.config.js ---------------
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // jsdom для тестирования DOM (например, React/Vue), можно node, happy-dom и т.п.
    globals: true, // чтобы не импортировать describe, it, expect и т.д.
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'istanbul', // или 'c8'
    },
  },
});

// --------------- ПРОВЕРКИ (expect) ---------------
// самые основные

expect(2 + 3).toBe(5); // строгое равенство (===)
expect({ a: 1 }).toEqual({ a: 1 }); // глубокое сравнение объектов
expect(null).toBeNull(); // проверка на null
expect(undefined).toBeUndefined(); // проверка на undefined
expect('hello').toContain('ell'); // содержится ли подстрока
expect([1, 2, 3]).toHaveLength(3); // длина массива
expect(promise).rejects.toThrowError(); // утверждает, выдает ли функция ошибку при ее вызове

// --------------- ОСНОВНЫЕ ОБЪЕКТЫ И МЕТОДЫ ---------------

// спиосок:

describe(); // позволяет организовать тесты в логические блоки
it() / test(); // определяют отдельные тест-кейсы
expect(); // сопадения для сравнения значений
beforeEach(); // выполняет код перед каждым тестом
afterEach(); // выполняет код после каждого теста

// примеры:

describe(); // Позволяет организовать тесты в логические блоки.
// Логическая группировка - describe может использоваться внутри другого describe.

describe('My Module', () => {
  describe('Function A', () => {
    it('should do something', () => {
      // Test logic here
    });

    it('should not do something else', () => {
      // Another test logic here
    });
  });

  describe('Function B', () => {
    it('should behave in this way', () => {
      // Test logic here
    });

    it('should fail under certain conditions', () => {
      // Another test logic here
    });
  });
});

// ----------------------

it(), test(); //Определяют отдельные тест-кейсы.
//Обычно содержат утверждения, проверяющие ожидаемое поведение кода.

it('should add two numbers', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

// ----------------------

expect(); //Основной способ проверки ожидаемых результатов.
//Использует различные сопадения для сравнения значений.

expect(2 + 3).toBe(5); // строгое равенство (===)
expect({ a: 1 }).toEqual({ a: 1 }); // глубокое сравнение объектов
expect(null).toBeNull(); // проверка на null
expect(undefined).toBeUndefined(); // проверка на undefined
expect('hello').toContain('ell'); // содержится ли подстрока
expect([1, 2, 3]).toHaveLength(3); // длина массива

// --------------- ХУКИ ЖИЗНЕННОГО ЦИКЛА ---------------

beforeEach(), afterEach(); // Эти хуки позволяют выполнять код перед каждым тестом (beforeEach)
// или после каждого теста (afterEach).
// Пример 1:
let mockData;

beforeEach(() => {
  mockData = { name: 'Test' };
});

afterEach(() => {
  mockData = null;
});

// Пример 2:
describe('Хуки тестов', () => {
  beforeAll(() => console.log('Перед всеми тестами'));
  beforeEach(() => console.log('Перед каждым тестом'));
  afterEach(() => console.log('После каждого теста'));
  afterAll(() => console.log('После всех тестов'));
});

// --------------- ПРАВИЛЬНЫЕ И НЕ ПРАВИЛЬНЫЕ ДАННЫЕ ---------------

// 1.	Правильные данные (корректные входные данные)

it('should add two positive numbers', () => {
  expect(add(2, 3)).toBe(5);
});

// 2.	Неверные данные (ошибочные или непредвиденные входные данные)

it('should throw error when adding strings', () => {
  expect(() => add('a', 3)).toThrowError();
});

// 3.	Крайние случаи (граничные значения и необычные комбинации входных данных)

it('should handle zero input', () => {
  expect(add(0, 0)).toBe(0);
});

it('should handle large numbers', () => {
  expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(NaN); // Максимальное значение плюс единица
});

// --------------- МОКИ (mock-функции) ---------------

/*
Mock (мок) — это объект-заглушка, который заменяет реальный объект и имитирует его поведение.
Основное отличие mock’ов заключается в том, что они не только предоставляют фиктивные результаты,
но и позволяют отслеживать вызовы методов, параметры и поведение объекта. Это значит, что вы можете проверить,
был ли вызван тот или иной метод, сколько раз он был вызван и с какими параметрами.

Stub (заглушка) — это объект-заглушка, который возвращает заранее заданные результаты,
но не отслеживает вызовы и параметры.
Stubs обычно используются, когда вам нужно контролировать ввод в тестируемую функцию,
но проверка взаимодействий с внешним объектом не требуется.
*/

import { vi } from 'vitest';

const mockFn = vi.fn();
mockFn('hello');
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith('hello');

// Мок модуля
vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'mocked' })),
}));

/*
Разница между Mocks и Stubs
Цель:
	Mocks используются для проверки взаимодействий с внешними объектами,
	тогда как stubs предназначены для контроля ввода в тестируемую функцию.
Отслеживание:
	Mocks позволяют отслеживать вызовы методов, параметры и количество вызовов,
	тогда как stubs просто возвращают заранее заданные значения.
Применение:
	Mocks чаще применяются для тестирования бизнес-логики, которая зависит от внешних сервисов,
	а stubs — для тестирования отдельных функций или методов.

Когда использовать Mocks и Stubs
Mocks: 	Когда нужно проверить, что внешние зависимости были вызваны правильно и с нужными параметрами.
Stubs: 	Когда вам нужно зафиксировать определенное поведение внешней зависимости, чтобы сосредоточиться на тестировании конкретной функции.
*/
