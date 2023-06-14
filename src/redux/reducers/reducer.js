const INTIAL_STATE = {
  categories: [],
  products: [],
}

function reducer(state = INTIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_CATEGORIES':
    return {
      ...state,
      categories: [{ id: 'xypto', name: 'Selecione a categoria' }, ...action.payload],
    };
  case 'SAVE_PRODUCTS':
    return {
      ...state,
      products: action.payload,
    };
  default:
    return state;
  };
}

export default reducer;
