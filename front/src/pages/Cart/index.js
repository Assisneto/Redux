import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md";
import { Container,ProductTable,Total } from './styles';

import { DeleteFromCart } from "../../store/modules/cart/action";

export default function Cart() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.cart);

  const handleDeleteProduct = productID =>{
    dispatch(DeleteFromCart(productID))
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
              <span>{product.price}</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                </button>

                <input type="number" readOnly value={product.amount}/>
                
                <button type='button'>
                  <MdAddCircleOutline size={20} color="#7159c1"/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
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
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
