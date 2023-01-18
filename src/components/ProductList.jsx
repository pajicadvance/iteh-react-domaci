import React from "react";
import classes from "./css/ProductList.module.css";
import Product from "./Product";
import { useState } from "react";

function ProductList({allProducts, addToCart}) {
    const [selectedValue, setSelectedValue] = useState("Processors");
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }
    return (
        <div>
            <div className={classes.group1}>
                <h1>Product list</h1>
                <div className={classes.select}>
                    <select onChange={handleChange}>
                        <option>Processors</option>
                        <option>Graphics Cards</option>
                        <option>Motherboards</option>
                        <option>Memory</option>
                    </select>
                    <div className={classes.select_arrow}>
                    </div>
                </div>
            </div>
            {allProducts.map((product) => {
                if (product.type === selectedValue) {
                    return (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        details={product.details}
                        addToCart={addToCart}
                    />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default ProductList