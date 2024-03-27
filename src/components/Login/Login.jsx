import React, { useState } from "react";
import * as S from "./login.styled";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuth }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();
        console.log("login user function");
        setAuth(true);
        navigate("/");
    };

    const isFormValid = email.length > 0 && password.length > 0;

    return (
        <S.LoginContainer onSubmit={(e) => loginUser(e)}>
            <S.FormGroup>
                <S.Label>˖ ࣪⊹˚이메일⁺⊹⋆</S.Label>
                <S.Input
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>˖ ࣪⊹˚비밀번호⁺⊹⋆</S.Label>
                <S.Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </S.FormGroup>

            <S.Button type="submit" disabled={!isFormValid}>
                로그인
            </S.Button>
        </S.LoginContainer>
    );
}
