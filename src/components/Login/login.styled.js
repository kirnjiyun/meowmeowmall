import styled, { css } from "styled-components";

const mobile = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `;
};

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
    overflow-x: hidden;

    ${mobile`
        min-width: 0;
        padding: 50px 20px;
        margin: 20px 0;
    `}
`;

export const P = styled.p`
    display: block;
    margin: 0 auto;
    width: fit-content;
    color: #5a5a5a;
    padding-bottom: 50px;

    ${mobile`
        padding-bottom: 40px;
        font-size:10px;
        line-height:1.2
    `}
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${mobile`
        flex-direction: column;
    `}
`;

export const Label = styled.label`
    margin-bottom: 10px;
    padding-left: 20px;
    ${mobile`
        font-size: 16px;
    `}
`;

export const Input = styled.input`
    width: 50%;
    padding: 10px 20px;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid rgb(255, 220, 230);
    outline: none;
    padding-left: 15px;
    transition: border-bottom 0.3s ease;

    &:focus {
        border-bottom: 2px solid rgb(245, 193, 208);
    }

    ${mobile`
        width: 80%;
        font-size: 12px;
    
    `}
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

    ${mobile`
        margin: 30px 20%;
        padding: 10px 0;
    `}
`;
