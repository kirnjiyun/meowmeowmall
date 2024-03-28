import React, { useEffect, useState } from "react";
import * as S from "./showAllProduct.styled";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./productCard/ProductCard";

export default function ShowAllProduct({ searchQuery, category }) {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        try {
            let response = await fetch(
                "https://my-json-server.typicode.com/kirnjiyun/meowmeowmall/products"
            );
            let data = await response.json();
            setProductList(data);
        } catch (error) {
            console.error("상품 가져오기 실패:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const filterProducts = () => {
        let filtered = productList;
        if (category === "" || category === "전체보기") {
            filtered = filtered.filter((product) => product.type !== category);
        } else if (category !== "전체보기" || category !== "") {
            filtered = filtered.filter((product) => product.type == category);
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
                    {displayedProducts.map((item) => (
                        <Col lg={3} md={4} xs={6} key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </S.AllContainer>
    );
}
