import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Loginpage from "./pages/Loginpage";
import NavBar from "./components/NavBar";
import * as S from "./app.styled.js";
import PrivateRoute from "./route/PrivateRoute.jsx";

export default function App() {
    const [auth, setAuth] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (keyword) => {
        setSearchQuery(keyword);
    };
    return (
        <S.AppContainer>
            <NavBar onSearch={handleSearch} />
            <Routes>
                <Route
                    path="/"
                    element={<ProductAll searchQuery={searchQuery} />}
                />
                <Route
                    path="/login"
                    element={<Loginpage setAuth={setAuth} />}
                />
                <Route
                    path="/product/:id"
                    element={<PrivateRoute auth={auth} />}
                />
            </Routes>
        </S.AppContainer>
    );
}
