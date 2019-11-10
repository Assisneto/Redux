import React, {useEffect, useState} from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from "../../services/api";

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]); 

  useEffect( ()=>{
    api.get('products').then(data =>{
      setProducts(data.data)
      console.log(data.data);
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
          <span>{product.price}</span>

            <button type="button">
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
