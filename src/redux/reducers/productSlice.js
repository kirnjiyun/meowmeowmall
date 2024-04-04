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

export const fetchProductDetail = createAsyncThunk(
    "product/fetchProductDetail",
    async (id) => {
        const response = await fetch(
            `https://my-json-server.typicode.com/kirnjiyun/meowmeowmall/products/${id}`
        );
        const data = await response.json();
        return data;
    }
);

const initialState = {
    products: [],
    selectedProduct: null,
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
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fetchProductDetail.pending, (state) => {})
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
