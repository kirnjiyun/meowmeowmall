import React from "react";
import { Navigate } from "react-router-dom";
import DetailofProduct from "../pages/DetailofProduct";

export default function PrivateRoute({ user }) {
    return user ? <DetailofProduct /> : <Navigate to="/login" />;
}
