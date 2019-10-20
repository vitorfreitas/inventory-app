const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    case 'CLEAN_CART':
      return []
    default:
      return state
  }
}

export default cartReducer
