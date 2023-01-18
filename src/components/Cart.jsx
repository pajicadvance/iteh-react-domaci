import React from "react";
import classes from "./css/Cart.module.css";
import Product from "./Product";

function Cart({allProducts, removeFromCart}) {
    return (
        <div>
            <h1>Cart</h1>
            {allProducts.map((product) => {
                if (product.inCart > 0) {
                    return (
                    <Product
                        key={product.id}
                        id={product.id}
                        type={product.type}
                        name={product.name}
                        image={product.image}
                        details={product.details}
                        removeFromCart={removeFromCart}
                        inCart={product.inCart}
                    />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default Cart