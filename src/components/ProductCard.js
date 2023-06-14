import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    return (
      <section className="product">
        <div className="img__container">
          <img className="product__image" src="https://via.placeholder.com/500x500" alt="Product" />
        </div>
        <span className="product__title">Product</span>
        <span className="product__price">R$ 0,00</span>
        <button className="product__add" type="button">Adicionar ao carrinho</button>
      </section>
    );
  }
}
