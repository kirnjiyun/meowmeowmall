import React, { useEffect, useState } from "react";
import * as S from "./showAllProduct.styled";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../redux/actions/productAction"; // productAction 객체 가져오기

export default function ShowAllProduct({ searchQuery, category }) {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(productAction.getProducts()); // productAction 객체에서 getProducts 액션 가져오기
    }, [dispatch]);

    const filterProducts = () => {
        let filtered = productList || [];
        if (category && category !== "전체보기") {
            filtered = filtered.filter((product) => product.type === category);
        }
        return filtered;
    };

    const searchProducts = (products) => {
        if (searchQuery !== "") {
            return products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return products;
    };

    const displayedProducts = searchProducts(filterProducts());

    return (
        <S.AllContainer>
            <Container>
                <Row>
                    {displayedProducts && displayedProducts.length > 0 ? (
                        displayedProducts.map((item) => (
                            <Col lg={3} md={4} sm={6} xs={12} key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    ) : (
                        <div>No products found.</div>
                    )}
                </Row>
            </Container>
        </S.AllContainer>
    );
}
