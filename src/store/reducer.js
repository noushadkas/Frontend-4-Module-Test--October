import { combineReducers } from "redux";
import cartReducer from "./reducer.cart";

const reducer = combineReducers(
    {
        cart : cartReducer
    }
)

export default reducer;