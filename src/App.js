import React, { Component } from 'react';
import './index.css';
import Products from './pages/Products';
import Header from './components/Header';
import Cart from './components/Cart';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Products />
          <Cart /> 
        </div>
      </>
    )
  }
}
