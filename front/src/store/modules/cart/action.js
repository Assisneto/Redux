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

export function UpdateAmount(id,amount){
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount
  }
}