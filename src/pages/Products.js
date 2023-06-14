import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

export default class Products extends Component {
  render() {
    return (
      <section className="products">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <ProductCard item={ product } key={ product } />
          ))
        }
      </section>
    );
  }
}
