export function calculateDiscount(purchaseAmount, loyaltyLevel) {
  if (purchaseAmount < 0) {
    return 0; // Возвращаем 0 для отрицательных значений суммы покупки
  }

  switch (loyaltyLevel) {
    case 'platinum':
      return purchaseAmount * 0.2;
    case 'gold':
      return purchaseAmount * 0.15;
    case 'silver':
      return purchaseAmount * 0.1;
    default:
      return 0; // Возвращаем 0 для неизвестных уровней лояльности
  }
}
