import React, { Component } from 'react';
import CartProducts from './CartProducts';

export default class Cart extends Component {
  render() {
    return (
      <section className="cart">
        <ol className="cart__products">
          <CartProducts />
        </ol>
        <p className="price">
          Subtotal
          <span className="total-price">R$ 0,00</span>
        </p>
      </section>
    );
  }
}
