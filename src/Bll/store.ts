import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "./product-reducer";


export const reducer = combineReducers({
    product: productReducer
})

export const store = createStore(reducer)

export type AppStateType = ReturnType<typeof reducer>