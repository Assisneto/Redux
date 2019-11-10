import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/40/HZM-1749-240/HZM-1749-240_detalhe1.jpg?ims=280x280" 
        alt="tenis"
        />
        <strong>Tênis very cool</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/40/HZM-1749-240/HZM-1749-240_detalhe1.jpg?ims=280x280" 
        alt="tenis"
        />
        <strong>Tênis very cool</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/40/HZM-1749-240/HZM-1749-240_detalhe1.jpg?ims=280x280" 
        alt="tenis"
        />
        <strong>Tênis very cool</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/40/HZM-1749-240/HZM-1749-240_detalhe1.jpg?ims=280x280" 
        alt="tenis"
        />
        <strong>Tênis very cool</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/40/HZM-1749-240/HZM-1749-240_detalhe1.jpg?ims=280x280" 
        alt="tenis"
        />
        <strong>Tênis very cool</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/> 3
          </div>
          
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
