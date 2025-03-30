import { it, expect, vi } from 'vitest';
import { id } from './generateId';

it.only('генерация id', () => {
  vi.spyOn(Date, 'now').mockReturnValueOnce(1); // теперь Date.now() гарантированно будет возвращать 1
  vi.spyOn(Math, 'random').mockReturnValueOnce(0.5); // теперь Math.random() гарантированно будет возврщать 0.5

  expect(id()).toBe('1i'); // ожидаемый ответ всегда будте одним и тем же, с учетом фиксированных Date и Math
});
