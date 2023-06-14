import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container-title">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>
        <div className="container-cartTitle">
          <select className="cart__title">
            {['Selecione a categoria', 'acessórios para veículos', 'agro', 'alimentos e bebidas'].map((category) => (
              <option key={ category }>{ category }</option>
            ))}
          </select>
        </div>
      </header>
    );
  }
}
