import styled from "styled-components";

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

export const Img = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

export const Title = styled.p`
    font-size: 18px;
`;
export const Price = styled.p`
    font-size: 18px;
`;
export const New = styled.p`
    font-size: 12px;
`;
