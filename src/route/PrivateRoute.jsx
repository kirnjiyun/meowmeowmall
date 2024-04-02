import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailofProduct from "../pages/DetailofProduct";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
    const Navigate = useNavigate();
    const authenticate = useSelector((state) => state.auth.authenticate);

    console.log(authenticate);

    return authenticate == true ? (
        <DetailofProduct />
    ) : (
        <Navigate to="/login" />
    );
}
