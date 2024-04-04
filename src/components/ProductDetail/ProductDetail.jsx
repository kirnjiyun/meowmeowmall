import React, { useEffect, useState } from "react";
import * as S from "./productDetail.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../../redux/reducers/productSlice";

export default function ProductDetail() {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, error } = useSelector((state) => state.product);

    const handleClick = (option) => {
        setSelected(option);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        dispatch(fetchProductDetail(id));
    }, [dispatch, id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <S.ProductDetailContainer>
            {selectedProduct && <S.Img src={selectedProduct.img} />}
            {selectedProduct && (
                <S.InfoBox>
                    <S.Title>{selectedProduct.title}</S.Title>
                    <S.Price>{selectedProduct.price.toLocaleString()}</S.Price>
                    {selectedProduct.new && <S.New>NEW</S.New>}
                    <S.DropdownContainer onClick={toggleDropdown}>
                        <span>{selected || "옵션 선택"}</span>
                        <S.DropdownContent isOpen={isOpen}>
                            {selectedProduct.option.map((option, index) => (
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
