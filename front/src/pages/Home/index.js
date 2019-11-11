import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';

import { addToCart } from "../../store/modules/cart/action";

import { MdAddShoppingCart } from 'react-icons/md';

import api from "../../services/api";

import { ProductList } from './styles';

export default function Home() {

  const dispatch = useDispatch();

  const handleAddProduct = product =>{
    dispatch(addToCart(product))
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

            <button type="button" onClick={()=> handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff"/> 3
              </div>
              
              <span>Adicionar ao Carrinho</span>
            </button>
        </li>
          ))
   })
    </ProductList>
  );
}
