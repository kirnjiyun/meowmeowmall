import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "@redux-devtools/extension";
import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer";
import productSlice from "./reducers/productSlice";

// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
const store = configureStore({
    reducer: { auth: authenticateReducer, product: productSlice },
});
//combinereducer, thunk, applymiddleware,composeWithDevTools
export default store;
