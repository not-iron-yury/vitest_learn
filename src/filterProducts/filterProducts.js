export function filterProducts(products, filters) {
  const { title, minPrice, maxPrice } = filters;

  return products.filter(product => {
    const matchesTitle = !title || product.title.includes(title);
    const matchesMinPrice = !minPrice || product.price >= minPrice;
    const matchesMaxPrice = !maxPrice || product.price <= maxPrice;

    return matchesTitle && matchesMinPrice && matchesMaxPrice;
  });
}
