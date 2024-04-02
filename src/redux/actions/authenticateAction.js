function login(email, password) {
    return (dispatch, getState) => {
        console.log("여긴 액션");
        dispatch({ type: "LOGIN_SUCCESS", payload: { email, password } });
    };
}
export const authenticateAtcion = { login };
