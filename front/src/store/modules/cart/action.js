export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  }
}

export function DeleteFromCart(productID) {
  return {
    type: '@cart/DELETE',
    productID
  }
}