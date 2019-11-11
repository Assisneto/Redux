import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { DeleteFromCart, UpdateAmount } from "../../store/modules/cart/action";

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md";
import { Container,ProductTable,Total } from './styles';

import { formatPrice } from '../../util/format';

export default function Cart() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.map(product=>({
    ...product,
    subtotal: formatPrice(product.amount * product.price)
  })))

  const total = formatPrice(products.reduce((total, product)=>{
    return total + product.amount * product.price
  },0))

  const handleDeleteProduct = productID =>{
    dispatch(DeleteFromCart(productID))
  }

  const increment = product =>{
    dispatch(UpdateAmount(product.id,product.amount +1))
  }

  const decrement = product =>{
    dispatch(UpdateAmount(product.id,product.amount -1))
  }


  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product)=>(  
          <tr key={product.id}>
            <td>
              <img 
                src={product.image}
                alt={product.title}
                />
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td>
              <div>
                <button type='button' onClick={()=>decrement(product)}>
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                </button>

                <input type="number" readOnly value={product.amount}/>
                
                <button type='button' onClick={()=>increment(product)}>
                  <MdAddCircleOutline size={20} color="#7159c1"/>
                </button>
              </div>
            </td>
            <td>
            <strong>{product.subtotal}</strong>
            </td>
            <td>
              <button type="button" onClick={()=> handleDeleteProduct(product.id)}>
                <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
      ))
      }
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
