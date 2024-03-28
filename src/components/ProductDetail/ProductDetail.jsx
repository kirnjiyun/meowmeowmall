import React, { useEffect, useState } from "react";
import * as S from "./productDetail.styled";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const handleClick = (option) => {
        setSelected(option);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const getDetail = async () => {
        let url = `https://my-json-server.typicode.com/kirnjiyun/meowmeowmall/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    };

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <S.ProductDetailContainer>
            {product && <S.Img src={product.img} />}

            {product && (
                <S.InfoBox>
                    <S.Title>{product.title}</S.Title>
                    <S.Price>{product.price.toLocaleString()}</S.Price>
                    {product.new && <S.New>NEW</S.New>}
                    <S.DropdownContainer onClick={toggleDropdown}>
                        <span>{selected || "옵션 선택"}</span>
                        <S.DropdownContent isOpen={isOpen}>
                            {product.option.map((option, index) => (
                                <S.MenuItem
                                    key={index}
                                    onClick={() => handleClick(option)}
                                >
                                    {option}
                                </S.MenuItem>
                            ))}
                        </S.DropdownContent>
                    </S.DropdownContainer>
                    <S.Button>추가</S.Button>
                </S.InfoBox>
            )}
        </S.ProductDetailContainer>
    );
}
