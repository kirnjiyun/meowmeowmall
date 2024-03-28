import styled from "styled-components";

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    cursor: pointer;
    gap: 10px;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        padding: 10px;
        gap: 5px;
    }
`;

export const Img = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 15px;

    @media (max-width: 768px) {
        border-radius: 10px; /
    }
`;

export const Title = styled.p`
    font-size: 18px;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
export const Price = styled.p`
    font-size: 18px;
    line-height: 1.2;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
export const New = styled.p`
    font-size: 12px;
    line-height: 1.2;
    @media (max-width: 768px) {
        font-size: 8px;
    }
`;
