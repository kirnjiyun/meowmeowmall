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
    const [category, setCategory] = useState("전체보기");

    const handleSearch = (keyword) => {
        setSearchQuery(keyword);
    };
    const handleLogout = () => {
        setAuth(false);
    };
    const handleCategory = (type) => {
        setCategory(type);
        console.log("앱으로 올라온", type);
    };
    return (
        <S.AppContainer>
            <NavBar
                onSearch={handleSearch}
                auth={auth}
                onLogout={handleLogout}
                onSelect={handleCategory}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductAll
                            searchQuery={searchQuery}
                            category={category}
                        />
                    }
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
