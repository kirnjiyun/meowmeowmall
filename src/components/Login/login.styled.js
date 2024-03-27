import styled, { css } from "styled-components";

export const LoginContainer = styled.form`
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 500px;
    max-width: 750px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 100px 0;
`;
export const FormGroup = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Label = styled.label`
    margin-bottom: 10px;
    padding-left: 20px;
`;

export const Input = styled.input`
    width: 50%;
    padding: 5px 20px;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid rgb(255, 220, 230);
    outline: none;
    padding-left: 15px;
    transition: border-bottom 0.3s ease;
    &:focus {
        border-bottom: 2px solid rgb(245, 193, 208);
    }
`;

export const Button = styled.button`
    font-size: 16px;
    padding: 15px 0;
    margin: 50px 35%;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;

    background-color: ${({ disabled }) =>
        disabled ? "rgba(255, 20, 147, 0.3)" : "rgba(255, 20, 147, 0.8)"};

    &:hover {
        background-color: ${({ disabled }) =>
            disabled ? "rgba(255, 20, 147, 0.3)" : "rgba(255, 20, 147, 0.8)"};
    }

    &:active {
        transform: scale(0.9);
    }
`;
