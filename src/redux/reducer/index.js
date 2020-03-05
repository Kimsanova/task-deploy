import {combineReducers} from "redux";
import orderReducer from "./order"
import restaurants from "./restaurant";

export default combineReducers({
    order: orderReducer,
    restaurants
})