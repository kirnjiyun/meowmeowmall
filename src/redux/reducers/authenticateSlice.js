import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "authenticate/login",
    async ({ email, password }, thunkAPI) => {
        console.log("여긴 액션");
        return { email, password };
    }
);

const authenticateSlice = createSlice({
    name: "authenticate",
    initialState: {
        email: "",
        password: "",
        authenticate: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log("로그인 석세스");
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.authenticate = true;
        });
    },
});

export default authenticateSlice.reducer;
