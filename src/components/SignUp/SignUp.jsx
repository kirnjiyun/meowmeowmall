import React, { useState } from "react";
import * as S from "./signUp.styled";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signUpUser = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            console.error("회원가입 실패:", error);
            // 회원가입 실패 시 처리할 로직 추가
        }
    };

    const isFormValid =
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0 &&
        password === confirmPassword;

    return (
        <S.SignUpContainer onSubmit={(e) => signUpUser(e)}>
            <S.P>회원가입을 해주세요</S.P>
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
            <S.FormGroup>
                <S.Label>˖ ࣪⊹˚비밀번호 확인⁺⊹⋆</S.Label>
                <S.Input
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </S.FormGroup>
            <S.Button type="submit" disabled={!isFormValid}>
                회원가입
            </S.Button>
        </S.SignUpContainer>
    );
}
