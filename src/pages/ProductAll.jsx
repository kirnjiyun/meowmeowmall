import React from "react";
import ShowAllProduct from "../components/ProductAll/ShowAllProduct";
export default function ProductAll({ searchQuery, category }) {
    return (
        <>
            <ShowAllProduct searchQuery={searchQuery} category={category} />
        </>
    );
}
