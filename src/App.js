import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import SignUpPage from "./pages/SignUpPage";
import Loginpage from "./pages/Loginpage";
import NavBar from "./components/NavBar";
import * as S from "./app.styled.js";
import PrivateRoute from "./route/PrivateRoute.jsx";
import { auth } from "./firebase"; // Firebase 설정 파일에서 auth 객체 가져오기

export default function App() {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("전체보기");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleSearch = (keyword) => {
        setSearchQuery(keyword);
    };

    const handleLogout = () => {
        auth.signOut(); // Firebase 로그아웃 메서드 호출
    };

    const handleCategory = (type) => {
        setCategory(type);
        console.log("앱으로 올라온", type);
    };

    return (
        <S.AppContainer>
            <NavBar
                onSearch={handleSearch}
                user={user}
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
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route
                    path="/product/:id"
                    element={<PrivateRoute user={user} />}
                />
            </Routes>
        </S.AppContainer>
    );
}
