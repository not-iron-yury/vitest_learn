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
