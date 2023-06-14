import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// documentação da API do Mercado Livre
// https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br

// endpoint para categorias
// https://api.mercadolibre.com/sites/MLB/categories

// endpoint para produtos de uma categoria
// https://api.mercadolibre.com/sites/MLB/search?category=MLB1055
