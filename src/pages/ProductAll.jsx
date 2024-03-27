import React from "react";
import ShowAllProduct from "../components/ProductAll/ShowAllProduct";
export default function ProductAll({ searchQuery }) {
    return (
        <>
            <ShowAllProduct searchQuery={searchQuery} />
        </>
    );
}
