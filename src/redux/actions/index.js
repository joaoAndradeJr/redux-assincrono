const saveCategories = (categories) => ({
  type: 'SAVE_CATEGORIES',
  payload: categories,
});

const saveProducts = (products) => ({
  type: 'SAVE_PRODUCTS',
  payload: products,
});

export function fetchCategories() {
  return (dispatch) => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((categories) => dispatch(saveCategories(categories)))
  }
}

export function fetchProducts(categoryId) {
  return (dispatch) => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((response) => response.json())
      .then(({ results }) => dispatch(saveProducts(results)))
  }
}