import React from "react";
import classes from "./css/Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Product() {
    const [detailsIsHidden, setDetailsIsHidden] = useState(true);
    function handleDetails() {
        setDetailsIsHidden(prevState=>!prevState);
    }
    return (
        <div className={classes.productWrapper}>
            <div className={classes.product}>
                <div className={classes.productItem}>
                    <img src="amdcpu.png" className={classes.productImage}></img>
                    <p className={classes.productName}>AMD Ryzen 5 2600</p>
                </div>
                <div className={classes.iconGroup}>
                    <FontAwesomeIcon icon="fa-solid fa-plus" className={classes.icon} />
                    {detailsIsHidden ? <FontAwesomeIcon onClick={handleDetails} icon="fa-solid fa-chevron-down" className={classes.icon}/> : 
                                       <FontAwesomeIcon onClick={handleDetails} icon="fa-solid fa-chevron-up" className={classes.icon}/>}
                </div>
            </div>
            <p className={detailsIsHidden ? classes.hide : classes.productDetails}>asfdsgfdhdfg</p>
        </div>
    )
}

export default Product;