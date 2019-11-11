import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';

import { addToCartRequest } from "../../store/modules/cart/action";

import { MdAddShoppingCart } from 'react-icons/md';

import api from "../../services/api";

import { ProductList } from './styles';

export default function Home() {

  const dispatch = useDispatch();

  const handleAddProduct = id =>{
    dispatch(addToCartRequest(id))
  } 

  const [products, setProducts] = useState([]); 

  useEffect( ()=>{
    api.get('products').then(response =>{
      const productData = response.data.map( data =>({
        ...data,
        priceFormatted: formatPrice(data.price),
      }));
      setProducts(productData)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const amount = useSelector(state =>{
   return state.cart.reduce((amount, product)=>{
      amount[product.id] = product.amount;
      return amount;
   },{})
  }) 


  return (
    <ProductList>
      {
        products.map(product => 
          (
          <li key={product.id} >
            <img src={product.image} 
            alt={product.title}
            />
        <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

            <button type="button" onClick={()=> handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff"/> {' '}
                {amount[product.id] || 0}
              </div>
              
              <span>Adicionar ao Carrinho</span>
            </button>
        </li>
          ))
   })
    </ProductList>
  );
}
