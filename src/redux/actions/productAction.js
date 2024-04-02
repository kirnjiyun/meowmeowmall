function getProducts() {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(
                "https://my-json-server.typicode.com/kirnjiyun/meowmeowmall/products"
            );
            let data = await response.json();

            dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
        } catch (error) {
            console.error("상품 가져오기 실패:", error);
        }
    };
}

export const productAction = { getProducts };
