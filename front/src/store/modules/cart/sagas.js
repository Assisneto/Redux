import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import {toast} from "react-toastify";

import api from '../../../services/api';
import { formatPrice } from './../../../util/format';

import { addToCartSuccess, UpdateAmountSucess } from './action';

function* addToCart({ id }){
  
  const productExists = yield select(
    state => state.cart.find(p => p.id === id),
  )

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1

  if(amount > stockAmount){
    toast.error('Quantidade solicitada fora de estoque')
    return;    
  }

  if(productExists) yield put(UpdateAmountSucess(id,amount));
  else{
    const response = yield call(api.get, `/products/${id}`);
      const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price)
      }
      yield put(addToCartSuccess(data))
  }

}

function* updateAmount({id, amount}){
  if(amount <= 0 ) return;

  const stock = yield call(api.get,`stock/${id}`);

  const stockAmount = stock.data.amount

  if(amount > stockAmount ) return toast.error('Quantidade solicitada fora de estoque')

  yield put(UpdateAmountSucess(id,amount));

}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
])