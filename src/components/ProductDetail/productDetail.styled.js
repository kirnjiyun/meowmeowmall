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
`;
export const Img = styled.img`
    aspect-ratio: 1/1;
    overflow: hidden;
    min-width: 80px;
    min-height: 80px;
    width: min(500px, 100%);
    height: min(500px, 100%);
`;

export const InfoBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 10px;
`;
export const Title = styled.p`
    font-size: 32px;
`;
export const Price = styled.p`
    font-size: 28px;
`;
export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
    border-bottom: 2px solid gray;
    width: 30%;
    min-width: 200px;
    padding-bottom: 16px;
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
`;
