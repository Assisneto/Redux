export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  }
}

export function addToCartSuccess(product){
  return {
    type: '@cart/ADD_SUCESS',
    product
  }
}

export function DeleteFromCart(id) {
  return {
    type: '@cart/DELETE',
    id
  }
}

export function UpdateAmount(id,amount){
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount
  }
}