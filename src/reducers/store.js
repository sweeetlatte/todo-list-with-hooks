import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todo";
import authReducer from "./login"

const reducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
})

const store = configureStore({
    reducer
})

export default store