/*
Задача №1: Тестирование функции валидации формы
Описание задачи:
Ты работаешь над проектом, где требуется создать форму регистрации пользователя.
Одна из важных частей этой формы — валидация введенных данных. Тебе нужно написать функцию validateForm,
которая проверяет правильность заполнения полей формы. Эта функция должна принимать объект с данными формы
и возвращать true, если форма заполнена корректно, и false в противном случае.

Требования к валидации:

Поле email должно содержать действительный адрес электронной почты.
Поле password должно быть длиной не менее 8 символов и содержать хотя бы одну цифру.
Поле confirmPassword должно совпадать с полем password.
Тебе нужно написать тесты для этой функции, используя Vitest, чтобы убедиться, что она работает корректно в разных ситуациях.

Входящие данные:
Форма содержит три поля: email, password и confirmPassword. Примеры входных данных:

{
  "email": "example@example.com",
  "password": "Passw0rd!",
  "confirmPassword": "Passw0rd!"
}

{
  "email": "invalid_email",
  "password": "short",
  "confirmPassword": "not_matching"
}
*/

function validateForm(userData) {
  return (
    isValidEmail(userData.email) &&
    isValidPassword(userData.password) &&
    isConfirmPassword(userData.password, userData.confirmPassword)
  );
}

function isValidEmail(email) {
  const pattern = new RegExp(/^[a-zA-Z0-9\._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'i');
  return pattern.test(email);
}

function isValidPassword(password) {
  const pattern = new RegExp(/^(?=.*[0-9])[a-zA-Z0-9\W]+$/i);
  return password.length >= 8 && pattern.test(password);
}

function isConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

export { validateForm, isValidEmail, isValidPassword, isConfirmPassword };
