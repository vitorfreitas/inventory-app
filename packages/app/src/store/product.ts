const defaultProduct = {
  name: 'Produto',
  price: 5,
  rawPrice: null,
  quantity: '1',
  measurementUnit: 'un',
  minimumAmount: '1',
  ingredients: []
}

const productReducer = (state = defaultProduct, action) => {
  const updateProduct = product => ({ ...state, ...product })
  const resetState = () => defaultProduct

  const types = {
    UPDATE_PRODUCT: updateProduct,
    RESET_STATE: resetState
  }

  return types[action.type] ? types[action.type](action.payload) : state
}

export default productReducer
