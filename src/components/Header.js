import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from '../redux/actions';

class Header extends Component {
  state = {
    selectedCategory: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  getProducts = () => {
    const { selectedCategory } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchProducts(selectedCategory));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.getProducts);
  }

  render() {
    const { categories } = this.props;
    const { selectedCategory } = this.state;

    return (
      <header className="header">
        <div className="container-title">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>
        <div className="container-cartTitle">
          <select
            className="cart__title"
            name="selectedCategory"
            onChange={ this.handleChange }
            value={ selectedCategory }
          >
            { categories.length > 0
              ? (
                categories.map((category) => (
                  <option value={ category.id } key={ category.id }>{ category.name }</option>
                ))
              )
              : <option>Selecione uma categoria</option>
            }
          </select>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.reducer.categories,
});

export default connect(mapStateToProps)(Header);
