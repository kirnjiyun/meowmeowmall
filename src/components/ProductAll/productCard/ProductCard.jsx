import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./productCard.styled";
export default function ProductCard({ item }) {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };
    const price = item?.price;
    const formattedPrice = price ? price.toLocaleString() : "";
    return (
        <S.ProductCardContainer onClick={showDetail}>
            <S.Img src={item?.img} />
            <S.Title>{item?.title}</S.Title>
            <S.Price>{formattedPrice}</S.Price>
            <S.New>{item.new && <S.New>NEW</S.New>}</S.New>
        </S.ProductCardContainer>
    );
}
