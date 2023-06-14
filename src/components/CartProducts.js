import React, { Component } from 'react';
import CartProductCard from './CartProductCard';

export default class CartProducts extends Component {
  render() {
    return (
      <>
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </>
    );
  }
}
