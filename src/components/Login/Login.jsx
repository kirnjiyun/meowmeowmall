import React, { useState } from "react";
import * as S from "./login.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authenticateSlice";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        console.log("login user function");
        try {
            await dispatch(login({ email, password })).unwrap();
            console.log("로그인 성공");
            navigate("/");
        } catch (error) {
            console.log("로그인 실패", error);
        }
    };

    const isFormValid = email.length > 0 && password.length > 0;

    return (
        <S.LoginContainer onSubmit={(e) => loginUser(e)}>
            <S.P>상세 정보를 보려면 로그인 해주세요</S.P>
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
