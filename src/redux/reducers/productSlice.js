// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { products: [] };

// const productSlice = (state = initialState, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, products: payload.data };
//         default:
//             return state;
//     }
// };

// export default productSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 비동기 액션 생성 함수
export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await fetch(
            "https://my-json-server.typicode.com/kirnjiyun/meowmeowmall/products"
        );
        const data = await response.json();
        return data;
    }
);

const initialState = {
    products: [],

    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {})
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload.data;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
