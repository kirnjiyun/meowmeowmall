import styled, { keyframes } from "styled-components";

const sparkle = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const New = styled.p`
    font-size: 12px;
    color: #ff1493;
    animation: ${sparkle} 1s infinite;
`;
export const ProductDetailContainer = styled.div`
    margin: 0 50px 0 50px;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: 0 20px 0 20px;
        padding-top: 20px;
    }
`;
export const Img = styled.img`
    aspect-ratio: 1/1;
    overflow: hidden;
    min-width: 80px;
    min-height: 80px;
    width: min(500px, 100%);
    height: min(500px, 100%);
    border-radius: 15px;
`;
export const InfoBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 10px;

    @media (max-width: 768px) {
        width: 80%;
    }
`;
export const Title = styled.p`
    font-size: 32px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
export const Price = styled.p`
    font-size: 28px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
    border-bottom: 2px solid gray;
    width: 30%;
    min-width: 200px;
    padding-bottom: 16px;

    @media (max-width: 768px) {
        width: 60%;
        font-size: 16px;
        max-width: 200px;
    }
`;
export const DropdownContent = styled.div`
    position: absolute;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    top: 45px;
    background-color: #f9f9f9;
    width: 30%;
    min-width: 200px;
    border-radius: 15px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const MenuItem = styled.a`
    color: inherit;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
        background-color: #f1f1f1;
        color: black;
    }
    transition: transform 0.1s;
    &:active {
        transform: scale(0.9);
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
    background-color: rgba(255, 20, 147, 0.8);
    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 768px) {
        margin: 30px 10%;
        padding: 10px 0;
    }
`;
