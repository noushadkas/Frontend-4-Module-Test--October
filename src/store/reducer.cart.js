const initialState = {
    cart : []
}

function cartReducer(state = initialState,action){
    if(action.type === 'cart'){
        return {cart:[...state.cart,action.payload]}
    }
    else if(action.type === 'remove'){
        return {cart: [...state.cart.filter((arrItem) => arrItem.id !== action.removeItem.id)]}
    }
    return state;
}

export default cartReducer;