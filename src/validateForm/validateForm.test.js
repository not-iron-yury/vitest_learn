import { it, describe, expect } from 'vitest';
import { validateForm, isValidEmail, isValidPassword, isConfirmPassword } from './validateForm';

describe('валидация данных формы регистрации', () => {
  describe('isValidEmail', () => {
    it('должен возвращать true, когда правильный формат email', () => {
      expect(isValidEmail('valid@example.com')).toBe(true);
      expect(isValidEmail('john.doe@gmail.com')).toBe(true);
      expect(isValidEmail('john55.doe@gmail.com')).toBe(true);
    });

    it('должен возвращать false, когда не правильный формат email', () => {
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('invalid_email')).toBe(false);
      expect(isValidEmail('john.doe@gma@il.com')).toBe(false);
    });
  });

  describe('isValidPassword', () => {
    it('должен возвращать true, когда правильный пароль', () => {
      expect(isValidPassword('aaaaaaa8')).toBe(true);
      expect(isValidPassword('aa^S@aa#a!Z8')).toBe(true);
      expect(isValidPassword('Gkjnc!rfz22/41')).toBe(true);
    });

    it('должен возвращать false, когдане правильный пароль', () => {
      expect(isValidPassword('aaaaaa8')).toBe(false);
      expect(isValidPassword('#a!Z8')).toBe(false);
      expect(isValidPassword('Gkjnc!rfz/')).toBe(false);
    });
  });

  describe('isConfirmPassword', () => {
    it('должен возвращать true, когда пароли совпадают', () => {
      expect(isConfirmPassword('aaaaaaa8', 'aaaaaaa8')).toBe(true);
    });

    it('должен возвращать false, когда пароли не совпадают', () => {
      expect(isConfirmPassword('aaaaaa8', 'aa')).toBe(false);
    });
  });

  describe('validateForm', () => {
    it('должно возвращать true для правильных данных формы', () => {
      const data = {
        email: 'example@example.com',
        password: 'Passw0rd!',
        confirmPassword: 'Passw0rd!',
      };

      expect(validateForm(data)).toBe(true);
    });
    it('должно возвращать false для не правильных данных формы', () => {
      const data = {
        email: 'invalid_email',
        password: 'short',
        confirmPassword: 'not_matching',
      };

      expect(validateForm(data)).toBe(false);
    });
  });
});
