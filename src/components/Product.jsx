import React from "react";
import classes from "./css/Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Product({id, name, image, details, addToCart, removeFromCart, inCart}) {
    const [detailsIsHidden, setDetailsIsHidden] = useState(true);
    const location = useLocation();
    function handleDetails() {
        setDetailsIsHidden(prevState=>!prevState);
    }
    function handleAddToCart() {
        addToCart(id);
    }
    function handleRemoveFromCart() {
        removeFromCart(id);
    }
    console.log(location.pathname);
    return (
        <div className={classes.productWrapper}>
            <div className={classes.product}>
                <div className={classes.productItem}>
                    <img src={image} className={classes.productImage}></img>
                    <p className={classes.productName}>{name}</p>
                </div>
                <div className={classes.iconGroup}>
                    {location.pathname === "/cart" ? <p>Qty: {inCart}</p> : null}
                    {location.pathname === "/cart" ? <FontAwesomeIcon onClick={handleRemoveFromCart} icon="fa-solid fa-minus" className={classes.icon}/> : 
                                       <FontAwesomeIcon onClick={handleAddToCart} icon="fa-solid fa-plus" className={classes.icon}/>}
                    {detailsIsHidden ? <FontAwesomeIcon onClick={handleDetails} icon="fa-solid fa-chevron-down" className={classes.icon}/> : 
                                       <FontAwesomeIcon onClick={handleDetails} icon="fa-solid fa-chevron-up" className={classes.icon}/>}
                </div>
            </div>
            <p className={detailsIsHidden ? classes.hide : classes.productDetails}>{details}</p>
        </div>
    )
}

export default Product;