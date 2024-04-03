// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { products: [] };

// const productReducer = (state = initialState, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, products: payload.data };
//         default:
//             return state;
//     }
// };

// export default productReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProductSuccess: (state, action) => {
            state.products = action.payload.data;
        },
    },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
