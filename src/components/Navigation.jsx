import React from "react";
import { Link } from "react-router-dom";
import classes from "./css/Navigation.module.css"

function Navigation() {
    return (
        <nav id={classes.menu}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/productlist'>Product list</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
          </ul>
        </nav>
      );
}

export default Navigation;