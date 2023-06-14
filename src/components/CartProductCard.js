import React, { Component } from 'react';

export default class CartProductCard extends Component {
  render() {
    return (
      <li className="cart__product">
        <div className="cart__product__image-container">
          <img className="product__image" src="https://via.placeholder.com/200x200" alt="Imagem do produto no carrinho" />
        </div>
        <div className="cart__product__info__container">
          <span className="product__title">Nome do produto</span>
          <span className="product__price">
            R$ <span className="product__price__value">0,00</span>
          </span>
        </div>
      </li>
    );
  }
}
