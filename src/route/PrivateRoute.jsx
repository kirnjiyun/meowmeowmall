import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailofProduct from "../pages/DetailofProduct";

export default function PrivateRoute({ auth }) {
    const navigate = useNavigate(); // useNavigate 훅 사용
    console.log(auth);

    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    }, [auth, navigate]);

    return auth == true ? <DetailofProduct /> : null;
}
